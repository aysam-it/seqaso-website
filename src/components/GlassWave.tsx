import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  
  void main() {
    vUv = uv;
    vec3 pos = position;
    
    float wave1 = sin(pos.x * 2.0 + uTime * 0.5) * 0.3;
    float wave2 = sin(pos.x * 3.0 + pos.y * 1.5 + uTime * 0.7) * 0.15;
    float wave3 = sin(pos.x * 5.0 + uTime * 1.0) * 0.05;
    
    pos.z += wave1 + wave2 + wave3;
    
    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    
    gl_Position = projectedPosition;
    
    vNormal = normalize(normalMatrix * normal);
    vPosition = pos;
  }
`;

const fragmentShader = `
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  
  void main() {
    vec3 viewDirection = normalize(cameraPosition - vPosition);
    float fresnel = pow(1.0 - dot(viewDirection, vNormal), 3.0);
    
    vec3 deepBlue = vec3(0.04, 0.06, 0.11);
    vec3 electricBlue = vec3(0.145, 0.388, 0.922);
    vec3 cyan = vec3(0.024, 0.714, 0.831);
    
    vec3 color = mix(deepBlue, electricBlue, fresnel);
    color = mix(color, cyan, fresnel * 0.5 + sin(uTime * 0.3) * 0.1);
    
    float glow = pow(fresnel, 2.0) * 0.8;
    color += electricBlue * glow;
    
    float alpha = 0.6 + fresnel * 0.4;
    
    gl_FragColor = vec4(color, alpha);
  }
`;

function WaveMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    []
  );

  useFrame((state) => {
    if (meshRef.current) {
      uniforms.uTime.value = state.clock.elapsedTime;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-0.3, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[12, 8, 128, 128]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function GlassWave() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 2, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <WaveMesh />
      </Canvas>
    </div>
  );
}