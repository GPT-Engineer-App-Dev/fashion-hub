import Header from "../components/Header";
// Use chakra-ui
import { Container, Text, VStack } from "@chakra-ui/react";

// Example of using react-icons
// import { FaRocket } from "react-icons/fa";
// <IconButton aria-label="Add" icon={<FaRocket />} size="lg" />; // IconButton would also have to be imported from chakra

const Index = () => {
  return (
    <>
      <Header />
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to our Clothing Store</Text>
          <Text>Explore our latest collection.</Text>
        </VStack>
      </Container>
    </>
  );
};

export default Index;
