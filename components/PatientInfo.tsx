import React from "react";
import {
  Box,
  Container,
  Heading,
  List,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { MedicationRecord, Note, Result, Scan } from "./types/interfaces";

interface Props {
  record: {
    dateOfBirth: string;
    medicalHistory: string;
    consultationNotes: Note[];
    testResults: Result[];
    scans: Scan[];
    medicationRecords: MedicationRecord[];
  };
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

        {record.consultationNotes.map((note, index) => (
          <Box key={index} width="100%">
            <VStack spacing={6} align="center" width="100%">
              <Heading textAlign="left">Consultation Notes</Heading>
              <Text>Date: {note.date}</Text>
              <Text>Doctor: {note.doctor}</Text>
              <Text>Notes: {note.notes}</Text>
            </VStack>
            <Box {...sectionDividerStyle} />
          </Box>
        ))}

        {record.testResults.map((result, index) => (
          <Box key={index} width="100%">
            <VStack spacing={6} align="center" width="100%">
              <Heading>Test Results</Heading>
              <Text>Date: {result.date}</Text>
              <Text>Test Type: {result.testType}</Text>
              <Text>Results: {result.results}</Text>
            </VStack>
            <Box {...sectionDividerStyle} />
          </Box>
        ))}

        {record.scans.map((scan, index) => (
          <Box key={index} width="100%">
            <VStack spacing={6} align="center" width="100%">
              <Heading>Scans</Heading>
              <Text>Date: {scan.date}</Text>
              <Text>Scan Type: {scan.scanType}</Text>
              <Text>Results: {scan.results}</Text>
            </VStack>
            <Box {...sectionDividerStyle} />
          </Box>
        ))}

        <VStack spacing={6} align="center" width="100%">
          <Heading>Medication Records</Heading>
          <List width="100%">
            {record.medicationRecords.map((record, index) => (
              <Box key={index} width="100%">
                <VStack spacing={6} align="center" width="100%">
                  <Text>Date: {record.date}</Text>
                  <Text>Medication: {record.medication}</Text>
                  <Text>Dosage: {record.dosage}</Text>
                  <Text>Frequency: {record.frequency}</Text>
                </VStack>
              </Box>
            ))}
          </List>
        </VStack>
      </VStack>
    </Container>
  );
};

export default PatientInfo;
