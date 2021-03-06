import { Box, Button, Heading, Image, useToast } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts';

const Navbar = () => {
  const {
    authState: { isAuth },
  } = useAuth();

  const navigate = useNavigate();
  const toast = useToast();

  const logoutHandler = () => {
    localStorage.clear();
    toast({
      title: 'Logout Successfully!',
      position: 'top-right',
      status: 'success',
      duration: 4000,
      isClosable: true,
    });
    navigate(0);
  };

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
        {isAuth ? (
          <Button
            colorScheme="blue"
            variant="solid"
            mx={2}
            onClick={logoutHandler}
          >
            Logout
          </Button>
        ) : (
          <Link to="/login">
            <Button colorScheme="blue" variant="solid" mx={2}>
              Login
            </Button>
          </Link>
        )}
        <ColorModeSwitcher fontSize="2xl" />
      </Box>
    </Box>
  );
};

export { Navbar };
