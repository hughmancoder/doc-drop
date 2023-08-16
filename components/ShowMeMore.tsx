import { useState } from "react";
import { Patient } from "./paitent";
import { Card, Button, Center, Heading } from "@chakra-ui/react";
import PatientInfo from "./PatientInfo";

interface ShowMeMoreProps {
  record: Patient;
}
export const ShowMeMore: React.FC<ShowMeMoreProps> = ({ record }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Card minW={"90vw"} p={4}>
      <Center>
        <Heading size="lg" textAlign="center" mb={4}>
          Patient record for {record.fullName}
        </Heading>
      </Center>
      <Center>
        <Button onClick={() => setShowMore(!showMore)} size="sm">
          {showMore ? "Show Less" : "Show Me More"}
        </Button>
      </Center>
      {showMore && (
        <Center mt={4}>
          <PatientInfo record={record} />
        </Center>
      )}
    </Card>
  );
};
