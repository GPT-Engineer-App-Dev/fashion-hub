import { Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Flex p={4} bg="brand.700" color="white">
      <Heading size="md">Clothing Brand</Heading>
      <Spacer />
      <Link to="/">Home</Link>
    </Flex>
  );
};

export default Header;