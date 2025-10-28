export const auroraVertexShader = `
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const auroraFragmentShader = `
  uniform float uTime;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;
  varying vec2 vUv;

  // Simplex 2D noise
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
      dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;
    
    // Create flowing noise patterns
    float noise1 = snoise(uv * 2.0 + uTime * 0.05);
    float noise2 = snoise(uv * 3.0 - uTime * 0.03);
    float noise3 = snoise(uv * 1.5 + vec2(uTime * 0.04, -uTime * 0.02));
    
    // Combine noise layers
    float combinedNoise = (noise1 + noise2 * 0.5 + noise3 * 0.3) / 1.8;
    
    // Create gradient from bottom to top
    float gradient = smoothstep(0.0, 1.0, uv.y);
    
    // Mix colors based on noise and gradient
    vec3 color = mix(uColorA, uColorB, gradient);
    color = mix(color, uColorC, combinedNoise * 0.5 + 0.5);
    
    // Add subtle glow
    float glow = pow(1.0 - abs(combinedNoise), 2.0) * 0.3;
    color += vec3(glow);
    
    gl_FragColor = vec4(color, 0.8);
  }
`;
