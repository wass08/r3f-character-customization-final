import { ColorInput, Stack } from "@mantine/core";
import {
  SwatchesColors,
  useCharacterCustomization,
} from "../contexts/CharacterCustomizationContext";

export const TopConfigurator = () => {
  const { shirtColor, setShirtColor } = useCharacterCustomization();

  return (
    <Stack spacing={"sm"} py={"sm"}>
      <ColorInput
        label="Shirt"
        format="hex"
        swatches={SwatchesColors}
        value={shirtColor}
        onChange={setShirtColor}
      />
    </Stack>
  );
};
