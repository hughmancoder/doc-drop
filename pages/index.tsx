import React from "react";
import Layout from "./layout";
import PopularButtons from "../components/PopularButtons";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import HeaderCard from "../archive/HeaderCard";
import { cardData as STATIC_CARD_DATA } from "../archive/static/CardData";
import MotionWrapper from "../archive/MotionWrapper";
import ContentCard from "../archive/ContentCard";
import useCardDataManagement from "../hooks/useCardDataManagement";
import { Filter } from "../archive/Filter";
import NewCard from "../archive/NewCard";
export default function HomePage() {
  const { cardData } = useCardDataManagement(STATIC_CARD_DATA);

  return (
    <Layout>
      <PopularButtons />

      <Flex marginTop={5}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
          {cardData.map((card, index) => (
            <MotionWrapper key={index} index={index}>
              <ContentCard
                title={card.title}
                description={card.description}
                imageUrl={card?.imageUrl}
                link={card?.link}
                status={card.status}
                price={card.price}
                location={card.location}
              />
            </MotionWrapper>
          ))}
        </SimpleGrid>
      </Flex>
    </Layout>
  );
}
