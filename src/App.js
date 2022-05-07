import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { Login, SignUp, Home, Profile } from './pages';
import { Navbar } from './components';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
