import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Link,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link as ReachLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const submitFormHandler = async userData => {
    try {
      const user = await axios.post(
        'http://localhost:3200/api/user/login',
        userData
      );
      console.log('Login Successful!', user.data);
      localStorage.setItem('user', JSON.stringify(user.data));
      navigate('/');
    } catch (error) {
      console.log('Login Failed!', error);
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
      </FormControl>
    </Box>
  );
};

export { Login };
