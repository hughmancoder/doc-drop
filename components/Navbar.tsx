import React, { useCallback, useEffect, useState } from "react";
import {
  Flex,
  Box,
  Button,
  Spacer,
  HStack,
  VStack,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  IconButton,
  useDisclosure,
  useToast,
  Checkbox,
} from "@chakra-ui/react";

import ColorModeToggle from "./ColorModeToggle";
import { FaPaperPlane } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import NotificationBar from "./NotificationBar";

const githubURL = "https://github.com/hughmancoder";

const Navbar = () => {
  // TODO: custom NavBar hook migrate
  const [notification, setNotifications] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const toast = useToast();
  type PositionType = "top-left" | "top-right" | "bottom-left" | "bottom-right";

  const handleNotificationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNotifications(event.target.checked);
  };

  const showToast: (position: PositionType) => void = (position) => {
    toast({
      title: `1 New Notifcation `,
      position: position,
      isClosable: true,
    });
  };
  const memoizedShowToast = useCallback(() => {
    showToast("top-left"); // You can also use the 'position' variable here
  }, [showToast]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (notification) {
        console.log("memo called");
        memoizedShowToast();
      }
      // 20 second callback function for notification output
    }, 20000);

    return () => {
      clearInterval(intervalId);
    };
  }, [notification, memoizedShowToast]);

  const handleClick = (requestURL: string) => {
    window.location.href = requestURL;
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      w="90vw"
    >
      <HStack>
        <Button
          variant="link"
          _hover={{ color: "blue.1000" }}
          onClick={() => handleClick("/")}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              whiteSpace: "nowrap",
            }}
          >
            <FaPaperPlane style={{ marginRight: "0.5rem" }} />
            Doc Drop
          </span>
        </Button>
      </HStack>

      <HStack spacing="1.5rem">
        <Box>
          <Button
            variant="link"
            _hover={{ color: "blue.700" }}
            onClick={() => handleClick("request")}
          >
            Make a Request
          </Button>
        </Box>
        <Box position="relative" display="inline-block">
          <IconButton
            mt="8px"
            variant="link"
            onClick={onOpen}
            aria-label="open notifications"
            icon={<FiBell style={{ fontSize: "16px" }} />}
          />
          <Box
            position="absolute"
            top="-4px"
            right="-4px"
            width="12px"
            height="12px"
            borderRadius="50%"
            backgroundColor="green.400"
          />
        </Box>
        <Box mt="4px">
          <ColorModeToggle />
        </Box>

        <Box style={{ zIndex: 100 }}>
          <Menu>
            <MenuButton>
              <Avatar
                src="https://api.dicebear.com/6.x/initials/svg?seed=D"
                name="User Profile"
                size="md"
              />
            </MenuButton>
            <MenuList style={{ zIndex: 10 }}>
              <MenuGroup title="Royale Adelaide Hospital">
                <MenuItem>My Account</MenuItem>
                <MenuItem>Sign out</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Help">
                <MenuItem onClick={() => window.open(githubURL, "_blank")}>
                  Contact
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Box>
      </HStack>

      <NotificationBar
        btnRef={btnRef}
        isOpen={isOpen}
        onClose={onClose}
        notification={notification}
        handleNotificationChange={handleNotificationChange}
      />
    </Flex>
  );
};

export default Navbar;
