import React, { useState } from "react";
import Layout from "./layout";

import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
} from "@chakra-ui/react";

import { FaSearch } from "react-icons/fa";
import { patientRecords } from "../data/patientRecords";
import PatientInfo from "../components/PatientInfo";
import { Patient } from "../components/paitent";

interface ShowMeMoreProps {
  record: Patient;
}
const ShowMeMore: React.FC<ShowMeMoreProps> = ({ record }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Card minW={"90vw"}>
      <CardHeader>
        <Center>
          <Heading size="2xl">{record.fullName}</Heading>
        </Center>
      </CardHeader>
      <CardBody>
        <Center>
          <Button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Show Me More"}
          </Button>
          {showMore && <PatientInfo record={record} />}
        </Center>
      </CardBody>
    </Card>
  );
};

export default function Request() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecords, setFilteredRecords] = useState(patientRecords);

  // Define handler to update filtered records based on search query
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = patientRecords.filter((record) =>
      record.fullName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRecords(filtered);
  };
  return (
    <Layout>
      <Box w="80vw">
        <Flex justify="center" alignItems="center">
          <InputGroup w="60vw">
            <InputLeftElement pointerEvents="none">
              <FaSearch color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search for approved patient records"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </InputGroup>
        </Flex>
        <Center paddingLeft={20}>
          <SimpleGrid spacing={6} padding={10}>
            {filteredRecords.map((record, index) => (
              <ShowMeMore key={index} record={record} />
            ))}
          </SimpleGrid>
        </Center>
      </Box>
    </Layout>
  );
}
