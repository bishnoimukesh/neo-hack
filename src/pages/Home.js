import { Box, Button, Image, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mx="5rem"
      my="2rem"
    >
      <Box
        display="flex"
        flexDir="column"
        justifyContent="space-between"
        w="30%"
      >
        <Heading as="h3" size="lg" my="2rem">
          Resume Builder
        </Heading>
        <Heading as="h4" size="md">
          The online resume builder which helps folks getting hired.
        </Heading>
        <Box display="flex">
          <Link to="/profile">
            <Button colorScheme="blue" variant="solid" size="lg" my="2rem">
              Get Started
            </Button>
          </Link>
          <Link to="/template">
            <Button colorScheme="blue" variant="solid" size="lg" m="2rem">
              Template
            </Button>
          </Link>
        </Box>
      </Box>
      <Image
        boxSize="32rem"
        objectFit="cover"
        src="/assets/home.webp"
        alt="Home"
      />
    </Box>
  );
};

export { Home };
