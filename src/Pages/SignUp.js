import React from 'react';
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
import { Link as ReachLink } from 'react-router-dom';

const SignUp = () => {
  return (
    <Box display="flex" justifyContent="center">
      <FormControl w="40%">
        <FormLabel htmlFor="firstName" my="4">
          First Name
        </FormLabel>
        <Input id="firstName" type="text" />
        <FormLabel htmlFor="lastName" my="4">
          Last Name
        </FormLabel>
        <Input id="lastName" type="text" />
        <FormLabel htmlFor="email" my="4">
          Email address
        </FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormLabel htmlFor="password" my="4">
          Password
        </FormLabel>
        <Input id="password" type="password" />
        <FormHelperText>We'll never share your password.</FormHelperText>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Button
            type="submit"
            colorScheme="blue"
            my="4"
            rightIcon={<ArrowForwardIcon />}
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
