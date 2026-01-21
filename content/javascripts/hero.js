"use strict";
/**
 * hero.js
 * Renders the Dark Matter / Nebula effect using WebGL.
 * Replicates the provided Shadertoy logic with procedural noise generation.
 */

const canvas = document.getElementById('gfx-canvas');
const gl = canvas.getContext('webgl');

if (!gl) {
    console.error("WebGL not supported");
}

/* -------------------------------------------------------------------------- */
/* SHADER SOURCE                               */
/* -------------------------------------------------------------------------- */

const vs = `
    attribute vec2 position;
    void main() {
        gl_Position = vec4(position, 0.0, 1.0);
    }
`;

const fs = `
    precision highp float;

    uniform vec2 iResolution;
    uniform float iTime;

    // --- Helper: Procedural Noise to replace iChannel0 ---
    // Replaces the texture lookup with Value Noise for standalone functionality.
    float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
    }

    float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), f.x),
                   mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
    }

    // --- User Provided Functions ---

    // 2d rotation matrix
    vec2 r(vec2 v, float t) {
        float s = sin(t), c = cos(t);
        return mat2(c, -s, s, c) * v;
    }

    // ACES tonemap
    vec3 a(vec3 c) {
        mat3 m1 = mat3(0.59719, 0.07600, 0.02840, 0.35458, 0.90834, 0.13383, 0.04823, 0.01566, 0.83777);
        mat3 m2 = mat3(1.60475, -0.10208, -0.00327, -0.53108, 1.10813, -0.07276, -0.07367, -0.00605, 1.07602);
        vec3 v = m1 * c;
        vec3 a_val = v * (v + 0.0245786) - 0.000090537;
        vec3 b_val = v * (0.983729 * v + 0.4329510) + 0.238081;
        return m2 * (a_val / b_val);
    }

    // Xor's Dot Noise
    float n(vec3 p) {
        const float PHI = 1.618033988;
        const mat3 GOLD = mat3(
            -0.571464913, +0.814921382, +0.096597072,
            -0.278044873, -0.303026659, +0.911518454,
            +0.772087367, +0.494042493, +0.399753815
        );
        return dot(cos(GOLD * p), sin(PHI * p * GOLD));
    }

    float fractalnoise(vec2 p) {
        float q = 1.;
        float t = 0.;
        for (int n = 0; n < 8; n++) {
            // Replaced texture() with procedural noise()
            t += (noise(p * q) - 0.5) / q / 2.;
            q += q;
        }
        return t;
    }

    void main() {
        vec2 u = gl_FragCoord.xy;
        vec4 o = vec4(0.0);

        vec4 c3 = vec4(0);
        vec2 p3 = u;
        vec2 r3 = iResolution.xy;
        float PI = 3.14159265358979;

        // Normalize coordinates
        p3 = (p3 + p3 - r3) / sqrt(r3.x * r3.y);

        // Loop 1: Fractal Background Generation
        for (float i = 0.; i < 100.; i++) {
            c3 += vec4(fractalnoise(p3 * 1.5 + 0.3 * (iTime + 100.) * cos(i * PI * 2. * 0.618 + vec2(0, 0.5) * PI)));
            p3 += sin(i * PI * 2. * 0.618 + vec2(0, 0.5) * PI) * c3.x * 0.75;
        }

        c3 = sin(c3 * vec4(1, 1.618, 2.618, 0) * 2.5) * 0.5 + 0.5;
        c3 *= c3;

        // Loop 2: Volumetric Raymarching
        float i = 0.0;
        float s = 0.0;

        vec3 p = vec3(0.);
        vec3 l = vec3(0.);
        vec3 b = vec3(0.);
        vec3 d = vec3(0.);
        vec3 c = vec3(0.);

        p.z = iTime * 0.0; // Time factor for z movement (set to 0 in original, can be animated)
        d = normalize(vec3(2. * u - iResolution.xy, iResolution.y));

        for (; i < 10.; i++) {
            b = p + c3.xyz;
            c = vec3(p.xy, 21000.);

            // Rotations and Deformations
            p.xy = r(p.xy * 2.1, length(c.xyz * (.9)));
            s = 0.50 + abs(n(b * 1.) / 1. - n(b * 5.) / 5.);
            s += abs(p.y * 1. - .5 + sin(p.z * 21.9 + cos(iTime) * .2 - p.y * .5) * .5 + .5) * .1;

            p += d * s;
            l += (1. + sin(i + length(p.xy * .05) + vec3(3, 1.5, 1))) / s;
        }

        // Final Tone Mapping & Output
        o.rgb = a(l * l / 100.) * 2.;
        o.a = 1.0;

        gl_FragColor = o;
    }
`;

/* -------------------------------------------------------------------------- */
/* WEBGL SETUP                                 */
/* -------------------------------------------------------------------------- */

// 1. Create Shader Helper
function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}

// 2. Initialize Program
const program = gl.createProgram();
gl.attachShader(program, createShader(gl, gl.VERTEX_SHADER, vs));
gl.attachShader(program, createShader(gl, gl.FRAGMENT_SHADER, fs));
gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(program));
}

gl.useProgram(program);

// 3. Setup Geometry (Full Screen Quad)
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
// Two triangles covering the clip space
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1.0, -1.0,
    1.0, -1.0,
    -1.0, 1.0,
    -1.0, 1.0,
    1.0, -1.0,
    1.0, 1.0
]), gl.STATIC_DRAW);

const posLoc = gl.getAttribLocation(program, "position");
gl.enableVertexAttribArray(posLoc);
gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

// 4. Uniform Locations
const iResolutionLoc = gl.getUniformLocation(program, "iResolution");
const iTimeLoc = gl.getUniformLocation(program, "iTime");

// 5. Render Loop
function render(time) {
    time *= 0.001; // Convert ms to seconds

    // Resize handling (High-DPI / Retina aware)
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
    }

    // Pass Uniforms
    gl.uniform2f(iResolutionLoc, canvas.width, canvas.height);
    gl.uniform1f(iTimeLoc, time);

    // Draw
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    requestAnimationFrame(render);
}

// Start the loop
requestAnimationFrame(render);
