import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { Login, SignUp, Home, Profile } from './pages';
import { Navbar, ProtectedRoute } from './components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose="1000"
        hideProgressBar="false"
        closeOnClick="true"
        pauseOnHover="true"
        draggable="true"
        progress="undefined"
      />
      <ChakraProvider theme={theme}>
        <Box fontSize="xl">
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
