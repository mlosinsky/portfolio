import { Canvas, useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Logo from './components/bg/Logo';

const DEFAULT_ROTATION = [Math.PI * 0.5, 0, 0] as const as [number, number, number];

function App() {
  return (
    <div className="absolute inset-0">
      <Canvas>
        <CameraController />
        <pointLight intensity={30} position={[3, 2, 5]} color={new THREE.Color('#ffffff')} />
        <Logo props={{ scale: 1, rotation: DEFAULT_ROTATION, position: [0, 0, 3] }} src={'/html.glb'} />
      </Canvas>
    </div>
  );
}

export default App;

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.minDistance = 3;
    controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};
