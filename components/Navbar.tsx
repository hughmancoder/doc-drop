import React from "react";
import {
  Flex,
  Box,
  Button,
  Spacer,
  HStack,
  Heading,
  VStack,
} from "@chakra-ui/react";
import HomePageNav from "./HomePageNav";
import ColorModeToggle from "./ColorModeToggle";

const Navbar = () => (
  <Flex
    as="nav"
    align="center"
    justify="space-between"
    padding="1rem"
    boxShadow="md"
    w="100vw"
  >
    <VStack>
      <HStack paddingX={"10rem"}>
        <Heading paddingRight="40rem" size="md">
          Logo
        </Heading>
        <Spacer />
        <Box>
          <Button
            variant="link"
            color="blue.500"
            _hover={{ color: "blue.700" }}
            marginRight="1rem"
          >
            Search
          </Button>
          <Button
            variant="link"
            color="blue.500"
            _hover={{ color: "blue.700" }}
          >
            Login/Signup
          </Button>
        </Box>
        <Box>
          <ColorModeToggle />
        </Box>
      </HStack>
      <Box>
        <HomePageNav />
      </Box>
    </VStack>
  </Flex>
);

export default Navbar;

{
  /* <Box>
  <HomePageNav />
</Box>; */
}
