import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Link,
  useToast,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link as ReachLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../contexts';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { authDispatch } = useAuth();
  const toast = useToast();

  const submitFormHandler = async userData => {
    try {
      const user = await axios.post(
        'https://neo-resume-api.herokuapp.com/api/user/login',
        userData
      );
      authDispatch({ type: 'AUTH_SUCCESS', payload: user.data });
      localStorage.setItem('user', JSON.stringify(user.data));
      toast({
        title: 'Login Successfull!',
        position: 'top-right',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      navigate('/');
    } catch (error) {
      toast({
        title: error.response.data,
        position: 'top-right',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box display="flex" justifyContent="center">
      <FormControl w="40%">
        <FormLabel htmlFor="email" my="4">
          Email address
        </FormLabel>
        <Input
          id="email"
          type="email"
          onChange={e => setUser({ ...user, email: e.target.value })}
          value={user.email}
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormLabel htmlFor="password" my="4">
          Password
        </FormLabel>
        <Input
          id="password"
          onChange={e => setUser({ ...user, password: e.target.value })}
          type="password"
          value={user.password}
        />
        <FormHelperText>We'll never share your password.</FormHelperText>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Button
            type="submit"
            rightIcon={<ArrowForwardIcon />}
            colorScheme="blue"
            my="4"
            onClick={() => submitFormHandler(user)}
          >
            Login
          </Button>
          <Link as={ReachLink} to="/signup">
            Create an Account
          </Link>
        </Box>
        <Button
          type="button"
          rightIcon={<ArrowForwardIcon />}
          colorScheme="blue"
          my="4"
          onClick={() =>
            submitFormHandler({
              email: 'kuldeepgupta@gmail.com',
              password: 'kuldeep',
            })
          }
          w="100%"
        >
          Login as Guest
        </Button>
      </FormControl>
    </Box>
  );
};

export { Login };
