import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Group } from "three";
import { easing } from "maath"; // For smooth motion

useGLTF.preload("/robot_playground.glb");

export default function Model() {
  const group = useRef<Group>(null);
  const { animations, scene } = useGLTF("/robot_playground.glb");
  const { actions } = useAnimations(animations, scene);
  const { viewport, mouse } = useThree(); // Get screen size and mouse position

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (actions["Experiment"]) {
      actions["Experiment"].play();
    }
  }, [actions]);

  useFrame(( _ , delta) => {
    if (group.current) {
      
      // Move the model smoothly based on the mouse position
      const targetX = mouse.x * 2; // Horizontal movement based on mouse
      const targetY = hovered ? -1.5 + mouse.y * 1.5 : -2 + mouse.y * 1.5; // Vertical movement

      easing.damp(group.current.position, "x", targetX, 0.3, delta);
      easing.damp(group.current.position, "y", targetY, 0.3, delta);
      easing.damp(group.current.rotation, "y", mouse.x * 0.5, 0.1, delta); // Rotate slightly on hover
    }
  });

  return (
    <group
      ref={group}
      scale={[viewport.width * 0.18, viewport.width * 0.16, viewport.width * 0.09]}
      position={[0, -2, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <primitive object={scene} />
    </group>
  );
}
