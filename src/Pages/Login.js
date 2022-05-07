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

const Login = () => {
  return (
    <Box display="flex" justifyContent="center">
      <FormControl w="40%">
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
            rightIcon={<ArrowForwardIcon />}
            colorScheme="blue"
            my="4"
          >
            Login
          </Button>
          <Link
            as={ReachLink}
            to="/signup"
            colorScheme="blue"
            variant="outline"
          >
            Create an Account
          </Link>
        </Box>
      </FormControl>
    </Box>
  );
};

export { Login };
