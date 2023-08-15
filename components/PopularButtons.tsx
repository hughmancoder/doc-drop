import { Button, Flex, HStack, Icon } from "@chakra-ui/react";
import React from "react";

interface Props {
  labels: string[];
  onAddLabel: (label: string) => void;
}

const PopularButtons = ({ labels, onAddLabel }: Props) => {
  return (
    <HStack>
      {labels.map((label, index) => (
        <Flex key={index} justifyContent="center" alignItems="center">
          <Button
            onClick={() => onAddLabel(label)}
            px={4}
            fontSize="sm"
            rounded="full"
            bg="blue.50"
            color="blue.600"
            _hover={{
              bg: "blue.100",
            }}
            _focus={{
              bg: "blue.100",
            }}
            zIndex={0} // Set the zIndex value to place the buttons behind other content
          >
            {label}
          </Button>
        </Flex>
      ))}
    </HStack>
  );
};

export default PopularButtons;
