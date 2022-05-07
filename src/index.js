import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as ReactDOMClient from 'react-dom/client';

const container = document.getElementById('root');

//Create a root
const root = ReactDOMClient.createRoot(container);

root.render(
  <StrictMode>
    <Router>
      <ColorModeScript />
      <App />
    </Router>
  </StrictMode>
);
