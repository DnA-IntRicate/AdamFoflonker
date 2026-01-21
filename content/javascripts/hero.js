const canvas = document.getElementById("gfx-canvas");
const gl = canvas.getContext("webgl2");

if (!gl)
    console.error("WebGL not supported");

////////////////
// Shaders
////////////////

// Vertex shader
const vs = await fetch("shaders/hero.vert").then(r => r.text());

// Fragment shader
const fs = await fetch("shaders/hero.frag").then(r => r.text());

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
    console.error("Program link error:", gl.getProgramInfoLog(program));

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

// Render loop
function render(time)
{
    // Resize handling (High-DPI / Retina aware)
    const dpr = window.devicePixelRatio || 1;

    const displayWidth = Math.floor(canvas.clientWidth * dpr);
    const displayHeight = Math.floor(canvas.clientHeight * dpr);

    if ((canvas.width !== displayWidth) || (canvas.height !== displayHeight))
    {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
    }

    gl.uniform3f(iResolutionLoc, canvas.width, canvas.height, 1.0);
    gl.uniform1f(iTimeLoc, time * 0.001); // Convert time to seconds

    gl.drawArrays(gl.TRIANGLES, 0, 6);
    requestAnimationFrame(render);
}

// Start the render loop
requestAnimationFrame(render);
