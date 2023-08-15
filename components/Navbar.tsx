import React, { useEffect } from "react";
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [notifications, setNotifications] = React.useState(false);

  useEffect(() => {
    const position: PositionType = "top-right"; // You can change this as needed
    const intervalId = setInterval(() => {
      if (notifications) {
        showToast(position);
      }
    }, 20000); // 30000 milliseconds (30 seconds)

    // Return a cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const showToast: (position: PositionType) => void = (position) => {
    toast({
      title: `1 New Notifcation `,
      position: position,
      isClosable: true,
    });
  };

  const handleClick = (requestURL: string) => {
    window.location.href = requestURL;
  };

  const handleNotificationChange = (event) => {
    setNotifications(event.target.checked);
  };

  const toast = useToast();
  type PositionType = "top-left" | "top-right" | "bottom-left" | "bottom-right";

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      w="100vw"
    >
      <VStack>
        <HStack paddingX="10rem">
          <Box>
            <Button
              variant="link"
              _hover={{ color: "blue.1000" }}
              onClick={() => handleClick("/")}
              display="inline-block"
              paddingRight="40rem"
              size="md"
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
          </Box>
          <Spacer />

          <Box>
            <Button
              variant="link"
              _hover={{ color: "blue.700" }}
              onClick={() => handleClick("request")}
            >
              Make a Request
            </Button>
          </Box>

          <Box mt="4px">
            <ColorModeToggle />
          </Box>
          <Box position="relative" display="inline-block">
            <IconButton
              mt="8px"
              variant="link"
              onClick={onOpen}
              aria-label="open notifications"
              icon={
                <FiBell
                  style={{
                    fontSize: "16px",
                  }}
                />
              }
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
          <Box>
            <Menu>
              <MenuButton>
                <Avatar
                  src="https://api.dicebear.com/6.x/initials/svg?seed=D"
                  name="User Profile"
                  size="md"
                />
              </MenuButton>
              <MenuList>
                <MenuGroup title="Royale Adelaide Hospital">
                  <MenuItem>My Account</MenuItem>
                  <MenuItem>Sign out</MenuItem>
                  <MenuItem>
                    <Box display="flex" alignItems="center">
                      <Checkbox
                        isChecked={notifications}
                        onChange={handleNotificationChange}
                      />
                      <Box ml={2}>Enabled Notifications</Box>
                    </Box>
                  </MenuItem>
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

        <NotificationBar btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
      </VStack>
    </Flex>
  );
};

export default Navbar;
