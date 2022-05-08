import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { Login, SignUp, Home, Profile, Template, Resume } from './pages';
import { Navbar, ProtectedRoute } from './components';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/template" element={<Template />} />
            <Route path="/resume" element={<Resume />} />
          </Route>
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
