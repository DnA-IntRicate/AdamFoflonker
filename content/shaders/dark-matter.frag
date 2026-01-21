#version 300 es
precision highp float;

// This shader is a modified version of "Zippy Zaps" by SnoopethDuckDuck
// See: https://www.shadertoy.com/view/XXyGzh

uniform vec3 iResolution;   // Viewport resolution (pixels)
uniform float iTime;        // Playback time (seconds)

// Output color
out vec4 fragColor;

// Controls the zoom of the image
#define ZOOM 0.27

// Controls the speed of the animation
#define TIME_SCALE 0.3

// Controls the amount of detail in the animation
#define DETAIL_LEVEL 19.0

// Controls the amount of radial distortion in the animation
#define RADIAL_DISTORTION 1.5

// Controls the scale of the distortion in the animation
#define DISTORTION_SCALE 4.5

// Controls the final luminosity of the image
#define LUMINOSITY 13.75 // 25.6

// The tint color to apply to the animation
#define TINT vec3(1.0, 0.15, 0.6)

vec2 tanhClamped(vec2 p)
{
    vec2 v = (exp(2.0 * p) - 1.0) / (exp(2.0 * p) + 1.0);
    return clamp(v, -1.0, 1.0);
}

void main()
{
    // Coordinate normalization
    vec2 v = iResolution.xy;
    vec2 u = gl_FragCoord.xy;
    u = ZOOM * ((u + u) - v) / v.y;

    vec4 o = fragColor;
    vec4 z = o = vec4(1.0, 2.0, 3.0, 0.0); // RGB phase channels

    for (float a = 0.5, t = iTime * TIME_SCALE, i; ++i < DETAIL_LEVEL;)
    {
        o += (1.0 + cos(z + t)) /
            length((1.0 + i * dot(v, v)) *
            sin(RADIAL_DISTORTION * u / (0.5 - dot(u, u)) - 9.0 * u.yx + t));

        v = cos(++t - 7.0 * u * pow(a += 0.03, i)) - DISTORTION_SCALE * u;

        u += tanhClamped(40.0 * dot(u *= mat2(cos(i + 0.02 * t - z.wxzw * 11.0)) , u) *
            cos(70.0 * u.yx + t)) / 2e2 +
            0.2 * a * u +
            cos(4.0 / exp(dot(o, o) / 1e2) + t) / 3e2;
    }

    o += 1e-6;
    o = LUMINOSITY / (min(o, 13.0) + 164.0 / o) - dot(u, u) / 250.0;
    fragColor.rgb = o.rgb * TINT;
}
