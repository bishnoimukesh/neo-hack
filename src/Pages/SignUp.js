import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

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
          <Button type="submit" colorScheme="blue" my="4">
            Register
          </Button>
          <Button
            type="button"
            rightIcon={<ArrowForwardIcon />}
            colorScheme="blue"
            variant="outline"
          >
            Login
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export { SignUp };
