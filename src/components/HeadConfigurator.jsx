import { ColorInput, Slider, Stack, Text, Title } from "@mantine/core";
import {
  SwatchesColors,
  useCharacterCustomization,
} from "../contexts/CharacterCustomizationContext";

export const HeadConfigurator = () => {
  const {
    hairColor,
    setHairColor,
    eyesColor,
    setEyesColor,
    glassesColor,
    setGlassesColor,
    skinColor,
    setSkinColor,
    mouthColor,
    setMouthColor,
    morphTargetDictionary,
    morphTargetInfluences,
    setMorphTargetInfluences,
  } = useCharacterCustomization();

  return (
    <Stack spacing={"sm"} py={"sm"}>
      <ColorInput
        label="Hair"
        format="hex"
        swatches={SwatchesColors}
        value={hairColor}
        onChange={setHairColor}
      />
      <ColorInput
        label="Eyes"
        format="hex"
        swatches={SwatchesColors}
        value={eyesColor}
        onChange={setEyesColor}
      />
      <ColorInput
        label="Glasses"
        format="hex"
        swatches={SwatchesColors}
        value={glassesColor}
        onChange={setGlassesColor}
      />
      <ColorInput
        label="Mouth"
        format="hex"
        swatches={SwatchesColors}
        value={mouthColor}
        onChange={setMouthColor}
      />
      <ColorInput
        label="Skin"
        format="hex"
        swatches={SwatchesColors}
        value={skinColor}
        onChange={setSkinColor}
      />
      <Title order={3}>Expressions</Title>
      {morphTargetDictionary.map((morphTarget, index) => (
        <Stack key={index}>
          <Text>{morphTarget}</Text>
          <Slider
            min={0}
            max={1}
            step={0.001}
            label={(value) => Math.round(value * 100)}
            value={morphTargetInfluences[index]}
            onChange={(value) => {
              morphTargetInfluences[index] = value;
              setMorphTargetInfluences([...morphTargetInfluences]);
            }}
          />
        </Stack>
      ))}
    </Stack>
  );
};
