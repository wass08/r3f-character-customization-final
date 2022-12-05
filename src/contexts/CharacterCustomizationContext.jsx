import { createContext, useContext, useState } from "react";

const CharacterCustomizationContext = createContext({});

export const CameraModes = {
  FREE: "FREE",
  HEAD: "HEAD",
  TOP: "TOP",
  BOTTOM: "BOTTOM",
};

export const SwatchesColors = [
  "#25262b",
  "#868e96",
  "#fa5252",
  "#e64980",
  "#be4bdb",
  "#7950f2",
  "#4c6ef5",
  "#228be6",
  "#15aabf",
  "#12b886",
  "#40c057",
  "#82c91e",
  "#fab005",
  "#fd7e14",
];

export const CharacterCustomizationProvider = ({ children }) => {
  const [takeScreenshot, setTakeScreenshot] = useState(false);
  const [cameraMode, setCameraMode] = useState(CameraModes.FREE);
  const [hairColor, setHairColor] = useState();
  const [eyesColor, setEyesColor] = useState();
  const [mouthColor, setMouthColor] = useState();
  const [glassesColor, setGlassesColor] = useState();
  const [skinColor, setSkinColor] = useState();
  const [shirtColor, setShirtColor] = useState();
  const [pantsColor, setPantsColor] = useState();
  const [shoesColor, setShoesColor] = useState();
  const [lacesColor, setLacesColor] = useState();
  const [soleColor, setSoleColor] = useState();
  const [morphTargetDictionary, setMorphTargetDictionary] = useState([]);
  const [morphTargetInfluences, setMorphTargetInfluences] = useState([]);

  return (
    <CharacterCustomizationContext.Provider
      value={{
        cameraMode,
        setCameraMode,
        hairColor,
        setHairColor,
        mouthColor,
        setMouthColor,
        eyesColor,
        setEyesColor,
        glassesColor,
        setGlassesColor,
        skinColor,
        setSkinColor,
        shirtColor,
        setShirtColor,
        pantsColor,
        setPantsColor,
        shoesColor,
        setShoesColor,
        lacesColor,
        setLacesColor,
        soleColor,
        setSoleColor,
        morphTargetDictionary,
        setMorphTargetDictionary,
        morphTargetInfluences,
        setMorphTargetInfluences,
        takeScreenshot,
        setTakeScreenshot,
      }}
    >
      {children}
    </CharacterCustomizationContext.Provider>
  );
};

export const useCharacterCustomization = () => {
  return useContext(CharacterCustomizationContext);
};
