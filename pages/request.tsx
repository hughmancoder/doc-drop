import React from "react";
import Layout from "./layout";

import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";

import { FaSearch } from "react-icons/fa";
import { patientRecords } from "../data/patientRecords";
import PatientInfo from "../components/PatientInfo";
import NotificationBar from "../components/NotificationBar";

export default function Request() {
  const record = patientRecords[0];
  return (
    <Layout>
      <Box w="80vw">
        <VStack spacing={6} align="center" padding={10}>
          <Flex justify="center" alignItems="center">
            <InputGroup w="60vw">
              <InputLeftElement pointerEvents="none">
                <FaSearch color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search for recently approved patient records"
              />
            </InputGroup>
          </Flex>
          <Heading size="2xl">{record.fullName}</Heading>
          <PatientInfo record={record} />
        </VStack>
      </Box>
    </Layout>
  );
}
