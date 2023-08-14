import { MdLocationOn } from "react-icons/md";
import {
  Card,
  CardBody,
  Text,
  Image,
  Flex,
  HStack,
  Badge,
  CardFooter,
  CardHeader,
} from "@chakra-ui/react";

interface Props {
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  status: string;
  price: number;
  location: string;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "loan":
      return "blue";
    case "sell":
      return "green";
    case "donate":
      return "red";
    default:
      return "gray"; // Default color for unknown statuses
  }
};

const ContentCard = ({
  title,
  description,
  imageUrl,
  status,
  price,
  location,
}: Props) => {
  const statusColor = getStatusColor(status.toString());
  const hospitalName = location.split(",");
  return (
    <>
      <Card rounded="lg">
        <Image
          src={
            imageUrl ||
            "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg"
          }
          alt={title}
          objectFit="cover"
          borderRadius="lg"
          maxHeight="15rem"
        />

        <Flex direction="column" h="15rem">
          <CardHeader>
            <HStack spacing="1" display="flex" justifyContent="space-between">
              <Text fontWeight="bold">{title}</Text>
              <Badge colorScheme={statusColor}>{status}</Badge>
            </HStack>
          </CardHeader>
          <CardBody flex="1" pt="2" pb="4">
            <HStack spacing="2" justifyContent="center">
              <Badge display="flex" alignItems="center">
                <MdLocationOn style={{ marginRight: "0.5rem" }} />
                <Text isTruncated>
                  {hospitalName.length > 30
                    ? hospitalName.slice(0, 30) + "..."
                    : hospitalName}
                </Text>
              </Badge>
            </HStack>
            <Text pt="4" noOfLines={4}>
              {description}
            </Text>
            {price != 0 && (
              <Text pt={4} color="green.400" fontSize="2xl">
                ${price}
              </Text>
            )}
          </CardBody>
          <CardFooter></CardFooter>
        </Flex>
      </Card>
    </>
  );
};

export default ContentCard;
