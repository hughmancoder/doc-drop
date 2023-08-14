import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";

export interface CardData {
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  status: string;
  price: number;
  location: string;
}

const useCardDataManagement = (initialData: CardData[]) => {
  const [cardData, setCardData] = useState<CardData[]>(initialData);
  const [filteredCardData, setFilteredCardData] =
    useState<CardData[]>(cardData);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const handleAddNewData = (newCard: CardData) => {
  //   setCardData((prevCardData) => [...prevCardData, newCard]);
  //   onClose();
  // };

  // const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchQuery(e.target.value);
  // };

  // const searchedData: CardData[] = searchQuery
  //   ? filteredCardData.filter((card) =>
  //       card.title.toLowerCase().includes(searchQuery.toLowerCase())
  //     )
  //   : filteredCardData;

  // const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const filterStatus = e.target.value;
  //   const filterApplied: CardData[] = filterStatus
  //     ? cardData.filter((card) => card.status === filterStatus)
  //     : cardData;
  //   setFilteredCardData(filterApplied);
  // };

  return {
    cardData,
    // filteredCardData,
    // searchQuery,
    // isOpen,
    // onOpen,
    // onClose,
    // handleAddNewData,
    // handleSearchChange,
    // searchedData,
    // handleFilterChange,
  };
};

export default useCardDataManagement;
