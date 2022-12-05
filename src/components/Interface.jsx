import { Affix, Button, Group } from "@mantine/core";
import { IconCamera } from "@tabler/icons";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";
import {
  CameraModes,
  useCharacterCustomization,
} from "../contexts/CharacterCustomizationContext";
import { BottomConfigurator } from "./BottomConfigurator";
import { HeadConfigurator } from "./HeadConfigurator";
import { TopConfigurator } from "./TopConfigurator";

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimations();
  const { cameraMode, setCameraMode, setTakeScreenshot } =
    useCharacterCustomization();
  return (
    <>
      <Affix position={{ top: 20, right: 20 }}>
        <Group>
          <Button onClick={() => setTakeScreenshot(true)}>
            <IconCamera size={18} />
          </Button>
          {Object.keys(CameraModes).map((mode) => (
            <Button
              key={mode}
              variant={mode === cameraMode ? "filled" : "light"}
              onClick={() => setCameraMode(mode)}
            >
              {mode}
            </Button>
          ))}
        </Group>
      </Affix>
      <Affix position={{ top: 50, right: 20 }}>
        {cameraMode === CameraModes.HEAD && <HeadConfigurator />}
        {cameraMode === CameraModes.TOP && <TopConfigurator />}
        {cameraMode === CameraModes.BOTTOM && <BottomConfigurator />}
      </Affix>
      <Affix position={{ bottom: 50, right: 20 }}>
        <Group>
          {animations.map((animation, index) => (
            <Button
              key={animation}
              variant={index === animationIndex ? "filled" : "light"}
              onClick={() => setAnimationIndex(index)}
            >
              {animation}
            </Button>
          ))}
        </Group>
      </Affix>
    </>
  );
};

export default Interface;
