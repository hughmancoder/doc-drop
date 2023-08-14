"use client";
import React, { useState } from "react";
import FileUpload from "./FileUpload";
import * as mammoth from "mammoth";
import { Container, VStack } from "@chakra-ui/react";
import { parseReceipt } from "../../utility/parseReceipt";

interface Props {
  setData: React.Dispatch<React.SetStateAction<any>>;
}
const ExtractTextFromFile = ({ setData }: Props) => {
  const handleFileUpload = async (file: File) => {
    try {
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.extractRawText({ arrayBuffer });
      const unparsedText = result.value;
      const parsedData = parseReceipt(unparsedText);
      setData(parsedData);
    } catch (error) {
      console.error("Error extracting text:", error);
    }
  };

  return (
    <div>
      <Container maxW="md">
        <VStack>
          <FileUpload onFileUpload={handleFileUpload} />
        </VStack>
      </Container>
    </div>
  );
};

export default ExtractTextFromFile;
