import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <ambientLight intensity={0.3} />
      <hemisphereLight intensity={0.6} skyColor="#e0e0e0" groundColor="#404040" position={[0, 10, 0]} />
      <directionalLight intensity={0.8} position={[5, 10, 5]} />
      <spotLight
        position={[-20, 50, 10]}
        angle={Math.PI / 4}  // Adjust the angle as needed
        penumbra={0.1}       // Adjust the penumbra as needed
        intensity={1}
      />
      <primitive 
        object={computer.scene}
        scale={0.75}
        position={[0, -4.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
