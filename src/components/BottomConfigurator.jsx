import { ColorInput, Stack } from "@mantine/core";
import {
  SwatchesColors,
  useCharacterCustomization,
} from "../contexts/CharacterCustomizationContext";

export const BottomConfigurator = () => {
  const {
    pantsColor,
    setPantsColor,
    shoesColor,
    setShoesColor,
    soleColor,
    setSoleColor,
    lacesColor,
    setLacesColor,
  } = useCharacterCustomization();

  return (
    <Stack spacing={"sm"} py={"sm"}>
      <ColorInput
        label="Pants"
        format="hex"
        swatches={SwatchesColors}
        value={pantsColor}
        onChange={setPantsColor}
      />
      <ColorInput
        label="Shoes"
        format="hex"
        swatches={SwatchesColors}
        value={shoesColor}
        onChange={setShoesColor}
      />
      <ColorInput
        label="Laces"
        format="hex"
        swatches={SwatchesColors}
        value={lacesColor}
        onChange={setLacesColor}
      />
      <ColorInput
        label="Sole"
        format="hex"
        swatches={SwatchesColors}
        value={soleColor}
        onChange={setSoleColor}
      />
    </Stack>
  );
};
