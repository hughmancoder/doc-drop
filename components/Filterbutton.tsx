"use client";

import { Button, Flex } from "@chakra-ui/react";

interface Props {
  text: string;
}
export default function FilterButton({ text }: Props) {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Button
        px={4}
        fontSize={"sm"}
        rounded={"full"}
        bg={"blue.50"}
        color={"blue.600"}
        _hover={{
          bg: "blue.100",
        }}
        _focus={{
          bg: "blue.100",
        }}
      >
        {text}
      </Button>
    </Flex>
  );
}
