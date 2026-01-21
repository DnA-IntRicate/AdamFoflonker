"use strict";
const canvas = document.getElementById('gfx-canvas');
const gl = canvas.getContext('webgl');

if (!gl) {
    console.error("WebGL not supported");
}

// --- Shader Source Code ---

const vs = `
    attribute vec2 position;
    void main() {
        gl_Position = vec4(position, 0.0, 1.0);
    }
`;

const fs = `
    precision highp float;
    uniform float u_time;
    uniform vec2 u_resolution;

    // Simplex noise / Fractal Brownian Motion for the "Ethereal" look
    mat2 rot(float a) {
        float s = sin(a), c = cos(a);
        return mat2(c, -s, s, c);
    }

    float map(vec3 p) {
        float d = 0.0;
        vec3 q = p;
        for(float i=1.0; i<5.0; i++) {
            q.xy *= rot(u_time * 0.1 + i);
            q.yz *= rot(u_time * 0.05 + i);
            d += abs(dot(sin(q), cos(q.yzx))) / i;
            q *= 1.7;
        }
        return d;
    }

    void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);

        vec3 col = vec3(0.0);
        vec3 ro = vec3(0.0, 0.0, -1.0);
        vec3 rd = normalize(vec3(uv, 1.2));

        float t = 0.0;
        for(int i=0; i<40; i++) {
            vec3 p = ro + rd * t;
            float d = map(p);
            t += d * 0.25;

            // Color palette: Deep Purples, Teals, and Midnight Blues
            col += vec3(0.02, 0.01, 0.04) / (d + 0.1);
            col += vec3(0.1, 0.4, 0.5) * 0.005 / (d * d + 0.01);
        }

        col *= exp(-0.3 * t); // Fog effect
        gl_FragColor = vec4(pow(col, vec3(0.8)), 1.0);
    }
`;

// --- WebGL Boilerplate ---

function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
}

const program = gl.createProgram();
gl.attachShader(program, createShader(gl, gl.VERTEX_SHADER, vs));
gl.attachShader(program, createShader(gl, gl.FRAGMENT_SHADER, fs));
gl.linkProgram(program);
gl.useProgram(program);

const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);

const pos = gl.getAttribLocation(program, "position");
gl.enableVertexAttribArray(pos);
gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

const timeLoc = gl.getUniformLocation(program, "u_time");
const resLoc = gl.getUniformLocation(program, "u_resolution");

function render(time) {
    time *= 0.001; // convert to seconds

    // Resize handling
    if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
    }

    gl.uniform1f(timeLoc, time);
    gl.uniform2f(resLoc, canvas.width, canvas.height);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    requestAnimationFrame(render);
}

requestAnimationFrame(render);
