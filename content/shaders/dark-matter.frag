#version 300 es
precision mediump float;

// This shader is a modified version of "Zippy Zaps" by SnoopethDuckDuck
// See: https://www.shadertoy.com/view/XXyGzh

uniform vec3 iResolution;   // Viewport resolution (pixels)
uniform float iTime;        // Playback time (seconds)

// Output color
out vec4 fragColor;

// Controls the zoom of the image
#define ZOOM 0.5

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
    return p / (1.0 + abs(p));
}

void main()
{
    // Coordinate normalization
    vec2 v = iResolution.xy;
    vec2 u = gl_FragCoord.xy;

    float aspect = v.x / v.y;
    float base = min(v.x, v.y);

    // Aspect compensation:
    // - Desktop (aspect ~1.6–2.0): ~1.0
    // - Phone portrait (aspect ~0.45): ~1.15
    float mobileComp = mix(1.0, 1.15, clamp(1.0 - aspect, 0.0, 1.0));

    u = (u - 0.5 * v) / base;
    u *= ZOOM * mobileComp;

    vec4 o = fragColor;
    vec4 z = o = vec4(1.0, 2.0, 3.0, 0.0); // RGB phase channels

    float ap = 1.0;
    for (float a = 0.5, t = iTime * TIME_SCALE, i; ++i < DETAIL_LEVEL;)
    {
        float vv = dot(v, v);
        float uu = dot(u, u);

        o += (1.0 + cos(z + t)) /
            length((1.0 + i * vv) *
            sin(RADIAL_DISTORTION * u / (0.5 - uu) - 9.0 * u.yx + t));

        a += 0.03;
        ap *= a;
        v = cos(++t - 7.0 * u * ap) - DISTORTION_SCALE * u;

        vec2 cz = cos(vec2(i + 0.02 * t) - z.wx * 11.0);
        mat2 m = mat2(cz.x, -cz.y, cz.y, cz.x);

        u += tanhClamped(40.0 * dot(u *= m, u) *
            cos(70.0 * u.yx + t)) * 0.005 +
            0.2 * a * u +
            cos(4.0 / exp(dot(o, o) * 0.01) + t) * 0.0033333333;
    }

    float uu = dot(u, u);

    o += 1e-6;
    o = LUMINOSITY / (min(o, 13.0) + 164.0 / o) - uu * 0.004;
    fragColor.rgb = o.rgb * TINT;
}
