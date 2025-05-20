#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 iResolution;
uniform float iTime;

vec3 baseColor = vec3(0.5, 0.5, 0.5);
vec3 variationStrength = vec3(0.5, 0.5, 0.5);
vec3 frequencyModifier = vec3(1.0, 1.0, 1.0);
vec3 phaseOffset = vec3(0.3, 0.2, 0.2);

// Palette Function Source: https://iquilezles.org/articles/palettes/
vec3 palette(float gradientSelector) {
    return baseColor + variationStrength * cos(6.28318 * (frequencyModifier * gradientSelector + phaseOffset));
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    // Converts pixel coordinates to a range of -1.0 to 1.0
    // Sets the origin to the center of the screen
    // Makes x coordinate independent of the aspect ratio
    vec2 uv = (fragCoord * 2.0 - iResolution.xy) / iResolution.y;

    vec3 color = vec3(0.0);

    // This calculates the distance from the pixel to the closest point on the sin wave
    float dsin = length(uv) * sin(uv.x + iTime);
    color += (1.0 - step(0.03, dsin)) * palette(dsin + iTime * 0.2);

    float dcos = length(uv) * cos(uv.y + iTime);
    color += (1.0 - step(0.03, dcos)) * palette(dcos + iTime * 0.2);

    float dtanInTime = length(uv) * tan(uv.x + iTime);
    color += (1.0 - step(0.03, dtanInTime)) * palette(dtanInTime + iTime * 0.2);

    float dtanDeTime = length(uv) * tan(uv.x - iTime);
    color += (1.0 - step(0.03, dtanDeTime)) * palette(dtanDeTime - iTime * 0.2);

    // float dtan = length(uv - vec2(clamp(uv.x, -3.4, 3.4), tan(uv.x + iTime) * 0.9));
    // color += (1.0 - step(0.03, dtan)) * palette(dtan + iTime * 0.2);



    fragColor = vec4(color, 1.0);

}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}

// Other Shader Code
    // // Tracks the Global origin
    // vec2 uv0 = uv;

    // for (float i = 0.0; i < 5.0; i++) {
    //     // Sets uv to the Local origin per fractal
    //     uv = fract(uv * 1.5) - 0.5;

    //     float d = length(uv) * exp(-length(uv0));

    //     vec3 col = palette(length(uv0) + i + iTime);

    //     d = sin(d * 8.0 + iTime) / 8.0;
    //     d = abs(d);

    //     d = pow(0.01 / d, 1.2);

    //     color = col * d;
    // }


    // // This calculates the distance from the pixel to the closest point on the sin wave
    // float dsin = length(uv - vec2(clamp(uv.x, -3.4, 3.4), sin(uv.x + iTime) * 0.9));
    // color += (1.0 - step(0.03, dsin)) * palette(dsin + iTime * 0.2);

    // float dcos = length(uv - vec2(clamp(uv.x, -3.4, 3.4), cos(uv.x - iTime) * 0.9));
    // color += (1.0 - step(0.03, dcos)) * palette(dcos + iTime * 0.2);
