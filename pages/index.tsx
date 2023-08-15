import React, { useState } from "react";
import Layout from "./layout";
import PopularButtons from "../components/PopularButtons";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import MotionWrapper from "../components/MotionWrapper";
import ProfesionalProfile from "../components/ProfessionalProfile";
import HomePageNav from "../components/HomePageNav";
import { professionalProfiles } from "../data/professionalProfiles";

export interface Location {
  name: string;
  address: string;
  open: false;
}
export interface Professional {
  id: number;
  name: string;
  avatarUrl: string;
  bio: string;
  location: string;
  online: boolean;
  phone: string;
  email: string;
  field: string;
}

const labels = [
  "General Practitioner",
  "Radiologist",
  "Cardiologist",
  "Dermatologist",
  "Orthopedic Surgeon",
  "Pediatrician",
  "Psychologist",
];

const useLabelFilter = (initialLabels: string[]) => {
  const [filterLabels, setFilterLabels] = useState<string[]>(initialLabels);

  const onAddLabel = (label: string) => {
    setFilterLabels((prevLabels) => [...prevLabels, label]);
  };

  const onRemoveLabel = (label: string) => {
    setFilterLabels((prevLabels) => prevLabels.filter((l) => l !== label));
  };

  return {
    filterLabels,
    onAddLabel,
    onRemoveLabel,
  };
};

export default function HomePage() {
  const { filterLabels, onAddLabel, onRemoveLabel } = useLabelFilter([]);

  return (
    <Layout>
      <Box boxShadow="md" w="100vw">
        <HomePageNav labels={filterLabels} onRemoveLabel={onRemoveLabel} />
      </Box>
      <PopularButtons labels={labels} onAddLabel={onAddLabel} />
      <Flex
        marginTop={5}
        marginX={10}
        justifyContent="center"
        alignItems="center"
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
          {professionalProfiles.map((data, index) => (
            <MotionWrapper key={index} index={index}>
              <ProfesionalProfile
                id={data.id}
                name={data.name}
                avatarUrl={data.avatarUrl}
                bio={data.bio}
                location={data.location}
                online={data.online}
                field={data.field}
                phone={data.phone}
                email={data.email}
              />
            </MotionWrapper>
          ))}
        </SimpleGrid>
      </Flex>
    </Layout>
  );
}
