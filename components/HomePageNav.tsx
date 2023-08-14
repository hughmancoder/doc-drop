import {
  Button,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaUserMd, FaSearchLocation } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";

const doctorSpecialties = [
  "General Practitioner",
  "Cardiologist",
  "Dermatologist",
  "Orthopedic Surgeon",
  "Pediatrician",
  // Add more specialties here
];

const HomePageNav = () => {
  return (
    <VStack>
      <HStack>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FaUserMd color="gray.300" />
          </InputLeftElement>
          <Input type="tel" placeholder="Specialty or provider name" />
        </InputGroup>

        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FaSearchLocation color="gray.300" />
          </InputLeftElement>
          <Input placeholder="Suburb or post code" />
        </InputGroup>
      </HStack>
      <HStack>
        {doctorSpecialties.map((specialty, index) => (
          <Button
            key={index}
            rightIcon={<Icon as={HiChevronDown} boxSize={4} />}
            variant="ghost"
            colorScheme="gray"
            borderColor="gray.300"
            borderRadius="full"
            marginBottom={2}
          >
            {specialty}
          </Button>
        ))}
      </HStack>
    </VStack>
  );
};

export default HomePageNav;
