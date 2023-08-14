import React from "react";
import { Heading, Box, Card, VStack, CardBody } from "@chakra-ui/react";

interface HeaderCardProps {
  title: string;
  description?: string;
  backgroundImageUrl?: string;
}

const HeaderCard: React.FC<HeaderCardProps> = ({
  backgroundImageUrl = "https://images.unsplash.com/photo-1508615070457-7baeba4003ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  title,
  description,
}) => {
  return (
    <header>
      <Card bgSize="cover" bgPosition="center" py={20} rounded={"xl"}>
        <CardBody maxW="600px" mx="auto" textAlign="center">
          <VStack spacing={4}>
            <Heading fontSize="7xl">{title}</Heading>
            <Box fontSize="xl">{description}</Box>
          </VStack>
        </CardBody>
      </Card>
    </header>
  );
};

export default HeaderCard;
