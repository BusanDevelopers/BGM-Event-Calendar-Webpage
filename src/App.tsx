/**
 * Entry point of the application
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

// React
import React from 'react';
import { render } from 'react-dom';
// Material UI
import { ThemeProvider, createTheme } from '@mui/material/styles';
// Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Font
import '@fontsource/ibm-plex-sans-kr/300.css';
import '@fontsource/ibm-plex-sans-kr/400.css';
import '@fontsource/ibm-plex-sans-kr/500.css';
import '@fontsource/ibm-plex-sans-kr/700.css';
// Elements
import Calendar from './Calendar';
import { CssBaseline } from '@mui/material';

// MUI Theme (Setup Font family)
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};
const theme = createTheme({
  breakpoints,
  typography: {
    fontFamily: '"IBM Plex Sans KR", sans-serif',
    subtitle1: {
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: '0.8rem',
      },
    },
    body1: {
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: '0.8rem',
      },
    },
    body2: {
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: '0.6rem',
      },
    },
  },
});

/**
 * React functional component to render the application's entry point
 *
 * @return {React.ReactElement} The entry point of the application
 */
function App(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="/:year-:month" element={<Calendar />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

render(<App />, document.getElementById('root'));
