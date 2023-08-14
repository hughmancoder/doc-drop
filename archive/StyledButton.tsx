import { Button, Icon } from "@chakra-ui/react";

interface Props {
  IconComponent: any;
  href?: string;
  label?: string;
}

export const StyledButton = ({ IconComponent, href }: Props) => {
  const handleClick = () => {
    if (href) window.location.href = href;
  };

  return (
    <Button
      size="lg"
      variant="solid"
      rounded="full"
      bg="transparent"
      display="flex"
      alignItems="center"
      onClick={handleClick}
    >
      <Icon as={IconComponent} mx="auto" />
    </Button>
  );
};
