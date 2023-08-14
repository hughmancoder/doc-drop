import React from "react";
import Layout from "./layout";
import PopularButtons from "../components/PopularButtons";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import MotionWrapper from "../components/MotionWrapper";
import ProfesionalProfile from "../components/ProfessionalProfile";

// import useCardDataManagement from "../hooks/useCardDataManagement";
// import { Filter } from "../archive/Filter";
// import NewCard from "../archive/NewCard";
export default function HomePage() {
  // const { cardData } = useCardDataManagement(STATIC_CARD_DATA);

  return (
    <Layout>
      <PopularButtons />

      <Flex marginTop={5}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
          {Array.from({ length: 10 }).map((_, index) => (
            <MotionWrapper key={index} index={index}>
              <ProfesionalProfile />
            </MotionWrapper>
          ))}
        </SimpleGrid>
      </Flex>
    </Layout>
  );
}
