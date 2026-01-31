/**
 * This script applies to index.md.
 */
"use strict";
(async () => {
    // DOM guard
    // if (!document.querySelector(".hero-page"))
    //     return;

    // Force dark mode on the home page
    document.body.setAttribute("data-md-color-scheme", "slate");
    // Force a specific primary color on the home page
    // document.body.setAttribute("data-md-color-primary", "red");

    const canvas = document.getElementById("gfx-canvas");
    if (!canvas)
        return; // Canvas was null, cannot continue

    const gl = canvas.getContext("webgl2");
    if (!gl)
    {
        console.error("WebGL2 not supported!");
        return;
    }

    ////////////////
    // Shaders
    ////////////////

    // Vertex shader
    const vs = await fetch("shaders/hero.vert").then(r => r.text());

    // Fragment shader
    const fs = await fetch("shaders/dark-matter.frag").then(r => r.text());

    ////////////////
    // WebGL setup
    ////////////////

    // Shader creation helper
    function createShader(gl, type, source)
    {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
        {
            console.error("Shader compile error:", gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }

        return shader;
    }

    // Bind shader program
    const program = gl.createProgram();
    gl.attachShader(program, createShader(gl, gl.VERTEX_SHADER, vs));
    gl.attachShader(program, createShader(gl, gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS))
    {
        console.error("Program link error:", gl.getProgramInfoLog(program));
        return;
    }

    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        -1.0, -1.0,
         1.0, -1.0,
        -1.0,  1.0,
        -1.0,  1.0,
         1.0, -1.0,
         1.0,  1.0
    ]), gl.STATIC_DRAW);

    // Vertex shader inputs
    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    // Find uniform locations in the shader program
    const iResolutionLoc = gl.getUniformLocation(program, "iResolution");
    const iTimeLoc = gl.getUniformLocation(program, "iTime");

    const isMobile = window.matchMedia("(pointer: coarse)").matches && !window.matchMedia("(hover: hover)").matches;
    const targetMobileDeltaTime = 33.33; // 33.33ms ~ 30 FPS
    const targetDesktopDeltaTime = 16.67; // 16.67ms ~ 60 FPS

    let lastFrameTime = 0;
    let renderQuality = 1.0; // Full desktop quality by default

    function determineBestRenderQuality()
    {
        const start = performance.now();
        render(0.0)
        const deltaTime = performance.now() - start;

        if (deltaTime > 16)
            renderQuality = 0.4; // Low quality, 40% resolution
        else if (deltaTime > 8)
            renderQuality = 0.7; // Medium quality, 70% resolution
        else
            renderQuality = 1.0; // High quality, full resolution

        console.log("Using render quality: %f", renderQuality);
    }

    // Render loop
    function frame(time)
    {
        // Lock framerate to 30 FPS on mobile, and 60 FPS for desktop
        const targetDeltaTime = isMobile ? targetMobileDeltaTime : targetDesktopDeltaTime;

        // Framerate limiting
        if ((time - lastFrameTime) >= targetDeltaTime)
        {
            lastFrameTime = time;
            render(time);
        }

        requestAnimationFrame(frame);
    }

    function render(time)
    {
        // Resize handling (High-DPI / Retina aware)
        const dpr = Math.min(window.devicePixelRatio || 1, 1.25); // Clamp resolution on mobile
        const displayWidth = Math.floor(canvas.clientWidth * dpr);
        const displayHeight = Math.floor(canvas.clientHeight * dpr);

        // NOTE: Previously, this was conditionally resized based on:
        //       if ((canvas.width !== displayWidth) || (canvas.height !== displayHeight))
        //       But we removed this to make renderQuality updates easier. This system doesn't need anymore complexity!
        canvas.width = displayWidth * renderQuality;
        canvas.height = displayHeight * renderQuality;

        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.uniform3f(iResolutionLoc, canvas.width, canvas.height, 1.0);
        gl.uniform1f(iTimeLoc, time * 0.001); // Convert time to seconds

        gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

    determineBestRenderQuality();

    // Start the render loop
    requestAnimationFrame(frame);
})();
