import React from "react";
import {
  Flex,
  Box,
  VStack,
  Center,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { MdOutlineInventory } from "react-icons/md";
import ColorModeSwitch from "./ColorModeSwitch";
import { StyledButton } from "./StyledButton";

const SideNav = () => {
  const navigationLinks = [
    { icon: AiOutlineShopping, label: "Marketplace", href: "/" },
    { icon: BsGraphUpArrow, label: "Analytics", href: "/analytics" },
    { icon: MdOutlineInventory, label: "Edit", href: "/edit" },
  ];

  const githubURL = "https://github.com/hughmancoder";

  return (
    <Flex h="50vh" align="center" marginX={4}>
      <VStack spacing={2} align="stretch">
        <Center>
          <Menu>
            <MenuButton>
              <Avatar
                src="https://lh6.googleusercontent.com/-WLxvC6ee9ew/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfq2k2JOIgwW9OKIkky9LzoIgluuQ/mo/photo.jpg"
                name="User Profile"
                size="md"
              />
            </MenuButton>
            <MenuList>
              <MenuGroup title="Royale Adelaide Hospital">
                <MenuItem>My Account</MenuItem>
                <MenuItem>Sign out </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Help">
                <MenuItem></MenuItem>
                <MenuItem>Contact</MenuItem>
                <MenuItem onClick={() => window.open(githubURL, "_blank")}>
                  Learn More
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Center>
        {navigationLinks.map(({ icon: IconComponent, label, href }, index) => (
          <VStack key={index} spacing={3} align="stretch">
            <Box>
              <Center>
                <StyledButton IconComponent={IconComponent} href={href} />
              </Center>
              <Center>{label}</Center>
            </Box>
          </VStack>
        ))}
        <ColorModeSwitch />
      </VStack>
    </Flex>
  );
};

export default SideNav;
