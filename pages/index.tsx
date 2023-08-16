import Layout from "./layout";
import PopularButtons from "../components/PopularButtons";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import MotionWrapper from "../components/MotionWrapper";
import ProfesionalProfile from "../components/ProfessionalProfile";
import HomePageNav from "../components/HomePageNav";
import { useProfileFiltering } from "../hooks/useHomePage";
import { professionalProfiles } from "../data/professionalProfiles";

const labels = [
  "General Practitioner",
  "Radiologist",
  "Cardiologist",
  "Dermatologist",
  "Orthopedic Surgeon",
  "Occupational Therapist",
  "Physiopherapist",
  "Favourites",
];

export default function HomePage() {
  const {
    filterLabels,
    filteredProfiles,
    onAddLabel,
    onRemoveLabel,
    handleSetFavourites,
    handleRemoveFavourites,
    handleLocationChange,
    handleSearchTermChange,
  } = useProfileFiltering(professionalProfiles);

  return (
    <Layout>
      <Box boxShadow="md" w="100vw">
        <HomePageNav
          labels={filterLabels}
          onRemoveLabel={onRemoveLabel}
          handleLocationChange={handleLocationChange}
          handleSearchTermChange={handleSearchTermChange}
        />
      </Box>
      <PopularButtons labels={labels} onAddLabel={onAddLabel} />
      <Flex
        marginTop={5}
        marginX={10}
        justifyContent="center"
        alignItems="center"
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
          {filteredProfiles.map((data, index) => (
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
                handleRemoveFavourites={handleRemoveFavourites}
                handleSetFavourites={handleSetFavourites}
              />
            </MotionWrapper>
          ))}
        </SimpleGrid>
      </Flex>
    </Layout>
  );
}
