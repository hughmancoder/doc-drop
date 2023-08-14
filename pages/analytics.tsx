import React, { useState } from "react";
import { Filter } from "../archive/Filter"; // Import the Filter component
import Layout from "./layout";
import HeaderCard from "../archive/HeaderCard";
import MotionWrapper from "../archive/MotionWrapper";
import ContentCard from "../archive/ContentCard";
import { cardData as STATIC_CARD_DATA } from "../archive/static/CardData";
import NewCard from "../archive/NewCard";
import { SearchIcon } from "@chakra-ui/icons";

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

export interface CardData {
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  status: string;
  price: number;
  location: string;
}

export default function HomePage() {
  const [cardData, setCardData] = useState<CardData[]>(STATIC_CARD_DATA);
  const [filteredCardData, setFilteredCardData] =
    useState<CardData[]>(cardData);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddNewData = (newCard: CardData) => {
    cardData.push(newCard);
    setCardData([...cardData]);
    onClose();
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const searchedData: CardData[] = searchQuery
    ? filteredCardData.filter((card) =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredCardData;

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filterStatus = e.target.value;
    const filterApplied: CardData[] = filterStatus
      ? cardData.filter((card) => card.status === filterStatus)
      : cardData;
    setFilteredCardData(filterApplied);
  };

  return (
    <>
      <Layout>
        <HeaderCard title={"Locations"} />
        <Flex marginTop={5} justifyContent={"space-evenly"}>
          <Box flex={4} pl={8} pr={4}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search by Title"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </InputGroup>
          </Box>
          <Box flex={2} pr={4}>
            <Filter onFilterChange={handleFilterChange} />
          </Box>
          <Box flex={1}>
            <Button onClick={onOpen}>Post Inventory</Button>
            <NewCard
              isOpen={isOpen}
              onClose={onClose}
              handleAddNewData={handleAddNewData}
            />
          </Box>
        </Flex>
        <Flex marginTop={5}>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
            {searchedData.map((card, index) => (
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
    </>
  );
}
