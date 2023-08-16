import React from "react";
import {
  Box,
  Container,
  VStack,
  Text,
  List,
  ListItem,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { Patient } from "./paitent";

interface Props {
  record: Patient;
}

const PatientInfo: React.FC<Props> = ({ record }) => {
  const sectionDividerStyle = {
    borderBottom: "1px solid",
    borderColor: useColorModeValue("gray.300", "gray.700"),
    padding: "2rem",
    minWidth: "60vw",
  };

  return (
    <Container maxW="7xl">
      <VStack spacing={6} align="center" padding={10}>
        <Heading>Patient Information</Heading>
        <Text>Date of Birth: {record.dateOfBirth}</Text>
        <Text>Medical History: {record.medicalHistory}</Text>
        <Box {...sectionDividerStyle} />

        <VStack spacing={6} align="center">
          <Heading textAlign="left">Consultation Notes</Heading>
          {record.consultationNotes.map((note, index) => (
            <Box key={index}>
              <Text>Date: {note.date}</Text>
              <Text>Doctor: {note.doctor}</Text>
              <Text>Notes: {note.notes}</Text>
              <Box {...sectionDividerStyle} />
            </Box>
          ))}
        </VStack>

        <VStack spacing={6} align="center">
          <Heading>Test Results</Heading>
          {record.testResults.map((result, index) => (
            <Box key={index}>
              <Text>Date: {result.date}</Text>
              <Text>Test Type: {result.testType}</Text>
              <Text>Results: {result.results}</Text>
              <Box {...sectionDividerStyle} />
            </Box>
          ))}
        </VStack>

        <VStack spacing={6} align="center">
          <Heading>Scans</Heading>
          {record.scans.map((scan, index) => (
            <Box key={index}>
              <Text>Date: {scan.date}</Text>
              <Text>Scan Type: {scan.scanType}</Text>
              <Text>Results: {scan.results}</Text>
              <Box {...sectionDividerStyle} />
            </Box>
          ))}
        </VStack>

        <VStack spacing={6} align="center">
          <Heading>Medication Records</Heading>
          <List>
            {record.medicationRecords.map((record, index) => (
              <ListItem key={index}>
                <Text>Date: {record.date}</Text>
                <Text>Medication: {record.medication}</Text>
                <Text>Dosage: {record.dosage}</Text>
                <Text>Frequency: {record.frequency}</Text>
              </ListItem>
            ))}
          </List>
        </VStack>
      </VStack>
    </Container>
  );
};

export default PatientInfo;
