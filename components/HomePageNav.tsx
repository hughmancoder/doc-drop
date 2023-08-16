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
import Select, { StylesConfig } from "react-select";
import { Professional } from "../pages";
import { professionalProfiles } from "../data/professionalProfiles";

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
    label: "All locations", // Change this to your desired default label
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
  const buttonTextColor = useColorModeValue("gray.500", "gray.400");

  const locationOptions = getLocationOptions(professionalProfiles);

  const bg = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("gray.900", "gray.400"); // Set text color

  const customStyles: StylesConfig = {
    control: (provided: any) => ({
      ...provided,
      width: "35rem",
      backgroundColor: bg,
      borderColor: "gray.50",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: textColor,
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
            onChange={(e) =>
              handleLocationChange((e as HTMLInputElement)?.value ?? "")
            }
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
