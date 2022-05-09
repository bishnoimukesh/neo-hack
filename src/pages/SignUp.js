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

const SignUp = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const toast = useToast();

  const submitFormHandler = async userData => {
    try {
      const { data } = await axios.post(
        'https://neo-resume-api.herokuapp.com/api/user/register',
        userData
      );
      console.log(data);
      toast({
        title: 'Registration Successfull!',
        position: 'top-right',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      navigate('/login');
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
        <FormLabel htmlFor="firstName" my="4">
          First Name
        </FormLabel>
        <Input
          id="firstName"
          type="text"
          onChange={e => setUser({ ...user, firstName: e.target.value })}
          value={user.firstName}
        />
        <FormLabel htmlFor="lastName" my="4">
          Last Name
        </FormLabel>
        <Input
          id="lastName"
          type="text"
          onChange={e => setUser({ ...user, lastName: e.target.value })}
          value={user.lastName}
        />
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
          type="password"
          onChange={e => setUser({ ...user, password: e.target.value })}
          value={user.password}
        />
        <FormHelperText>We'll never share your password.</FormHelperText>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Button
            type="submit"
            colorScheme="blue"
            my="4"
            rightIcon={<ArrowForwardIcon />}
            onClick={() => submitFormHandler(user)}
          >
            Register
          </Button>
          <Link as={ReachLink} to="/login">
            Already have an Account?
          </Link>
        </Box>
      </FormControl>
    </Box>
  );
};

export { SignUp };
