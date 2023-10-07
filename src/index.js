import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {MantineProvider, createTheme} from '@mantine/core';

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'cyan',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MantineProvider theme={theme}>
        <App />
    </MantineProvider>
);

