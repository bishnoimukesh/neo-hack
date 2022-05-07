import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import { Login, SignUp, Home, Profile } from './pages';
import { Navbar } from './components';
=======
import { Login, SignUp, Home } from './pages';
import { Navbar, ProtectedRoute } from './components';
>>>>>>> ce8c40b935519314f5bb7e6b11286ee5b856a1b6

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
<<<<<<< HEAD
          <Route path="/profile" element={<Profile />} />
=======
          <Route element={<ProtectedRoute />}></Route>
>>>>>>> ce8c40b935519314f5bb7e6b11286ee5b856a1b6
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
