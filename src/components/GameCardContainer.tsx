import { Card } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Card.Root
      width="300px"
      borderRadius="10px"
      overflow="hidden"
      bg="bg.subtle"
      variant="outline"
    >
      {children}
    </Card.Root>
  );
};

export default GameCardContainer;
