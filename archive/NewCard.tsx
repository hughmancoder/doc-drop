import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CardData } from "../pages";

import MultiSelectSwitch from "./MultiselectSwitch";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  handleAddNewData: (cardData: CardData) => void;
}

const NewCard = ({ isOpen, onClose, handleAddNewData }: Props) => {
  const [newCard, setNewCard] = useState<CardData>({
    title: "",
    description: "",
    imageUrl: "",
    link: "",
    status: "",
    price: 0,
    location: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCard({
      ...newCard,
      [name]: value || "",
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Make a new post</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              name="title"
              placeholder="Title"
              value={newCard.title}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Input
              name="description"
              placeholder="Description"
              value={newCard.description}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Image URL</FormLabel>
            <Input
              name="imageUrl"
              placeholder="Image URL"
              value={newCard.imageUrl}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Link</FormLabel>
            <Input
              name="link"
              placeholder="Link"
              value={newCard.link}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Status</FormLabel>
            <Input
              name="status"
              placeholder="Status"
              value={newCard.status}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Price</FormLabel>
            <Input
              type="number"
              name="price"
              placeholder="Price"
              value={newCard.price.toString()}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Location</FormLabel>
            <Input
              name="location"
              placeholder="Location"
              value={newCard.location}
              onChange={handleInputChange}
            />
          </FormControl>
          <MultiSelectSwitch />
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => handleAddNewData(newCard)}>Create Post</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NewCard;
