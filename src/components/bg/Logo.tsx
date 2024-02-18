import { useGLTF } from '@react-three/drei';
import { type GroupProps } from '@react-three/fiber';

interface Props {
  props?: GroupProps;
  src: string;
}

// TODO: preload assets?
export default function Logo({ props, src }: Props) {
  const { scene } = useGLTF(src);
  return (
    <group {...props}>
      <primitive object={scene} />
    </group>
  );
}
