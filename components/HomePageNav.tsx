import React from "react";
import {
  Button,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaUserMd, FaTimes } from "react-icons/fa";
import Select from "react-select";
import { professionalProfiles } from "../data/professionalProfiles"; // STATIC DATA
import { Professional } from "./types/interfaces";

export const getLocationOptions = (professionals: Professional[]) => {
  const uniqueLocations = Array.from(
    new Set(professionals.map((professional) => professional.location))
  );

  const locationOptions = uniqueLocations.map((location, index) => ({
    value: location,
    label: location,
  }));

  locationOptions.unshift({
    value: "All",
    label: "All locations",
  });

  return locationOptions;
};

interface Props {
  labels: string[];
  onRemoveLabel: (label: string) => void;
  handleLocationChange: (location: string) => void;
  handleSearchTermChange: (term: string) => void;
}
const HomePageNav = ({
  labels,
  onRemoveLabel,
  handleLocationChange,
  handleSearchTermChange,
}: Props) => {
  const locationOptions = getLocationOptions(professionalProfiles);
  const buttonTextColor = useColorModeValue("gray.500", "gray.400");
  const textColor = useColorModeValue("gray.900", "gray.100");
  const bg = useColorModeValue("white", "black");
  const controlbg = useColorModeValue("white", "gray.100");
  const boarderColour = useColorModeValue("gray.300", "gray.700");
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: controlbg,
      borderColor: boarderColour, // Soft gray border color
      zIndex: 100,
    }),

    menu: (provided: any) => ({
      ...provided,
      backgroundColor: bg,
      zIndex: 100,
    }),

    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: bg,
      color: textColor,
      zIndex: 100,
    }),
  };

  return (
    <VStack mb={4}>
      <HStack paddingLeft="20rem">
        <InputGroup width="35rem">
          <InputLeftElement pointerEvents="none">
            <FaUserMd color="gray.300" />
          </InputLeftElement>
          <Input
            type="tel"
            onChange={(e) => handleSearchTermChange(e.target.value)}
            placeholder="Specialty or provider name"
          />
        </InputGroup>
        {/* TODO: migrate into component */}
        <InputGroup zIndex={10}>
          <Select
            options={locationOptions}
            placeholder="Search for a Location"
            isSearchable
            styles={customStyles}
            onChange={(e) => handleLocationChange(e?.value ?? "")}
          />
        </InputGroup>
      </HStack>
      <HStack>
        {labels.map((label, index) => (
          <Button
            key={index}
            rightIcon={
              <Icon as={FaTimes} boxSize={4} color={buttonTextColor} />
            }
            variant="ghost"
            colorScheme="gray"
            borderColor="gray.300"
            borderRadius="full"
            marginBottom={2}
            onClick={() => onRemoveLabel(label)}
            color={buttonTextColor} // Set the text color
          >
            {label}
          </Button>
        ))}
      </HStack>
    </VStack>
  );
};

export default HomePageNav;
