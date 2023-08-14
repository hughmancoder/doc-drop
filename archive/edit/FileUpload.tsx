import { Button, InputGroup, Text } from "@chakra-ui/react";
import React, { ChangeEvent, useRef, useState } from "react";
import { MdInsertDriveFile } from "react-icons/md";

interface Props {
  onFileUpload: (file: File) => void;
}

const FileUpload = ({ onFileUpload }: Props) => {
  const hiddenFileInput = useRef<HTMLInputElement | null>(null);
  const [uploadStatus, setUploadStatus] = useState<
    "success" | "failure" | null
  >(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      onFileUpload(selectedFile);
      setFileName(selectedFile.name);
      setUploadStatus("success");
    }
  };

  const handleUploadFailure = () => {
    setUploadStatus("failure");
  };

  const handleClear = () => {
    setUploadStatus(null);
    setFileName(null);
  };

  const handleClick = () => {
    handleClear();
    hiddenFileInput.current?.click();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <InputGroup>
        <Button
          onClick={handleClick}
          leftIcon={<MdInsertDriveFile size="1.5em" color="gray.400" />}
        >
          Upload a document
        </Button>
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleFileChange}
          onError={handleUploadFailure}
          style={{ display: "none" }}
        />
      </InputGroup>
      {uploadStatus === "success" && (
        <Text color="green.500" mt={2}>
          Successfully uploaded: {fileName}
        </Text>
      )}
      {uploadStatus === "failure" && (
        <Text color="red.500" mt={2}>
          Upload failed: {fileName}
        </Text>
      )}
    </div>
  );
};

export default FileUpload;
