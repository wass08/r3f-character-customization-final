import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  CameraModes,
  useCharacterCustomization,
} from "../contexts/CharacterCustomizationContext";

import { useRef } from "react";
import * as THREE from "three";

const cameraPositions = {
  [CameraModes.HEAD]: {
    position: new THREE.Vector3(0, 0.5, 1),
    target: new THREE.Vector3(0, 0.5, 0),
  },
  [CameraModes.TOP]: {
    position: new THREE.Vector3(-0.5, 0.2, 1.5),
    target: new THREE.Vector3(0, 0.2, 0),
  },
  [CameraModes.BOTTOM]: {
    position: new THREE.Vector3(0, -0.5, 2.5),
    target: new THREE.Vector3(0, -0.5, 0),
  },
};

export const CameraControls = () => {
  const { cameraMode, setCameraMode } = useCharacterCustomization();
  const orbitControls = useRef();

  useFrame((state, delta) => {
    if (cameraMode === CameraModes.FREE) {
      return;
    }
    state.camera.position.lerp(cameraPositions[cameraMode].position, 3 * delta);
    orbitControls.current.target.lerp(
      cameraPositions[cameraMode].target,
      3 * delta
    );
  });

  return (
    <>
      <OrbitControls
        ref={orbitControls}
        onStart={() => {
          setCameraMode(CameraModes.FREE);
        }}
      />
    </>
  );
};
