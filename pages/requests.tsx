import React, { useState } from "react";
import Layout from "./layout";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { patientRecords } from "../data/patientRecords";
import { ShowMeMore } from "../components/ShowMeMore";

export default function Request() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecords, setFilteredRecords] = useState(patientRecords);

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
        <Flex direction="column" alignItems="center">
          <InputGroup w="60vw" mb={6}>
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
          <SimpleGrid columns={1} spacing={6}>
            {filteredRecords.map((record, index) => {
              return <ShowMeMore key={index} record={record} />;
            })}
          </SimpleGrid>
        </Flex>
      </Box>
    </Layout>
  );
}
