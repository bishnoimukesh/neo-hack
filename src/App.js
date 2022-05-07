import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Routes, Route } from 'react-router-dom';
import { Login, SignUp } from './Pages';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <ColorModeSwitcher justifySelf="flex-end" />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
