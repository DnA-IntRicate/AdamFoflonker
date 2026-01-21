#version 300 es
precision highp float;

// cosmic space new
// See: https://www.shadertoy.com/view/W3yczW

uniform vec3 iResolution;   // Viewport resolution (pixels)
uniform float iTime;        // Playback time (seconds)
// uniform sampler2D iChannel0;

// Output color
out vec4 fragColor;

//2d rotation matrix
vec2 r(vec2 v,float t){float s=sin(t),c=cos(t);return mat2(c,-s,s,c)*v;}

// ACES tonemap: https://www.shadertoy.com/view/Xc3yzM
vec3 a(vec3 c)
{
mat3 m1=mat3(0.59719,0.07600,0.02840,0.35458,0.90834,0.13383,0.04823,0.01566,0.83777);
mat3 m2=mat3(1.60475,-0.10208,-0.00327,-0.53108,1.10813,-0.07276,-0.07367,-0.00605,1.07602);
vec3 v=m1*c,a=v*(v+0.0245786)-0.000090537,b=v*(0.983729*v+0.4329510)+0.238081;
return m2*(a/b);
}

//Xor's Dot Noise: https://www.shadertoy.com/view/wfsyRX
float n(vec3 p)
{
    const float PHI = 1.618033988;
    const mat3 GOLD = mat3(
    -0.571464913, +0.814921382, +0.096597072,
    -0.278044873, -0.303026659, +0.911518454,
    +0.772087367, +0.494042493, +0.399753815);
    return dot(cos(GOLD * p), sin(PHI * p * GOLD));
}

float fractalnoise(vec2 p) {
    float q = 1.;
    float t = 0.;
    for(int n = 0; n < 8; n++) {
        t += (0.0 - 0.5) / q / 2.; // texture(iChannel0,p / 256. * q).x
        q += q;
    }
    return t;
}

void main()
{
    vec4 o = fragColor;
    vec2 u = gl_FragCoord.xy;

  vec4 c3=o;

  vec2 p3=u;
  vec2 r3 = iResolution.xy;
    float PI = 3.14159265358979;
    p3 = (p3 + p3 - r3) / sqrt(r3.x * r3.y);
    c3 = vec4(0);
    for(float i = 0.; i < 100.; i++) {
        c3 += vec4(fractalnoise(p3 * 1.5 + 0.3 * (iTime + 100.) * cos(i * PI * 2. * 0.618 + vec2(0,0.5) * PI)));
        p3 += sin(i * PI * 2. * 0.618 + vec2(0,0.5) * PI) * c3.x * 0.75;
    }
    c3 = sin(c3 * vec4(1,1.618,2.618,0) * 2.5) * 0.5 + 0.5;
    c3 *= c3;


   float i,s,t=iTime*0.;

    vec3 p,l,b,d,c;p.z=t;
    d=normalize(vec3(2.*u-iResolution.xy,iResolution.y));
    for(o*=i;i<10.;i++){
        b=p+c3.xyz;

        c=vec3(p.xy,21000.);
        p.xy=r(p.xy*2.1,length(c.xyz*(.9)));
        s=0.50+abs(n(b*1.)/1.-n(b*5.)/5.);

        s+=abs(p.y*1.-.5+sin(p.z*21.9+cos(iTime)*.2-p.y*.5)*.5+.5)*.1;
        p+=d*s;
        l+=(1.+sin(i+length(p.xy*.05)+vec3(3,1.5,1)))/s;
    }

    fragColor.rgb = a(l*l/100.)*2.;
}
