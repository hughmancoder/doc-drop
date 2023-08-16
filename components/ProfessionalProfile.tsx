import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMedkit } from "react-icons/io";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

interface Props {
  id?: number;
  name: string;
  avatarUrl: string;
  bio: string;
  location: string;
  online: boolean;
  phone?: string;
  email?: string;
  field?: string;
}

const ProfesionalProfile = ({
  name,
  avatarUrl,
  bio,
  location,
  online,
  email,
  field,
}: Props) => {
  const bg = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.700", "gray.400");

  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
  };
  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={bg}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={avatarUrl}
          mb={4}
          pos={"relative"}
          _after={
            online
              ? {
                  content: '""',
                  w: 4,
                  h: 4,
                  bg: "green.300",
                  border: "2px solid white",
                  rounded: "full",
                  pos: "absolute",
                  bottom: 0,
                  right: 3,
                }
              : {}
          }
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {name}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={1} fontSize={"sm"}>
          {email}
        </Text>

        <Link fontWeight={600} color={"gray.500"} fontSize={"sm"}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              whiteSpace: "nowrap",
            }}
          >
            <FaMapMarkerAlt style={{ marginRight: "0.5rem" }} />
            {location}
          </span>
        </Link>

        <Text fontWeight={600} color={"gray.500"} mb={2} fontSize={"sm"}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              whiteSpace: "nowrap",
            }}
          >
            <IoMdMedkit style={{ marginRight: "0.5rem" }} />
            {field}
          </span>
        </Text>

        <Text textAlign={"center"} color={textColor} px={3} paddingTop={4}>
          {bio}
        </Text>

        <Stack
          align={"center"}
          justify={"center"}
          direction={"row"}
          mt={6}
        ></Stack>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            _focus={{
              bg: "gray.200",
            }}
          >
            Message
          </Button>
          <Button
            flex={1}
            fontSize="sm"
            rounded="full"
            bg={isFavourite ? "blue.600" : "blue.400"}
            color="white"
            onClick={toggleFavourite}
          >
            {isFavourite ? "Favourited" : "Favourite"}
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};
export default ProfesionalProfile;
