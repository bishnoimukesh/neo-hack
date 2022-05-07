import { Box, Button, Heading, Image } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p="1rem"
    >
      <Box display="flex" alignItems="center">
        <Image
          boxSize="50px"
          objectFit="cover"
          src="/assets/resume-logo.webp"
          alt="Resume Builder Logo"
        />
        <Link to="/">
          <Heading as="h2" size="lg" mx={4}>
            Resume Builder
          </Heading>
        </Link>
      </Box>
      <Box display="flex" alignItems="center">
        <Link to="/login">
          <Button colorScheme="blue" variant="solid" mx={2}>
            Login
          </Button>
        </Link>
        <ColorModeSwitcher fontSize="2xl" />
      </Box>
    </Box>
  );
};

export { Navbar };
