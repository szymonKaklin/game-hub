import { HStack, Switch } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <HStack justifyContent={"space-between"}>
      <Switch.Root
        colorPalette={"green"}
        defaultChecked
        onChange={toggleColorMode}
      >
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label>Dark Mode</Switch.Label>
      </Switch.Root>
    </HStack>
  );
};

export default ColorModeSwitch;
