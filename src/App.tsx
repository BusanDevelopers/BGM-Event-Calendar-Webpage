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
import { CssBaseline } from '@mui/material';
// Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Font
import '@fontsource/ibm-plex-sans-kr/300.css';
import '@fontsource/ibm-plex-sans-kr/400.css';
import '@fontsource/ibm-plex-sans-kr/500.css';
// Elements
import Loading from './components/Loading/Loading';
const Calendar = React.lazy(() => import('./Calendar'));
const EventDetail = React.lazy(() => import('./EventDetail'));

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
        fontSize: '0.7rem',
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
    <React.StrictMode>
      <React.Suspense fallback={<Loading />}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Routes>
              <Route path="/" element={<Calendar />} />
              <Route path="/:year-:month" element={<Calendar />} />
              <Route path="/event/:id" element={<EventDetail />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </React.Suspense>
    </React.StrictMode>
  );
}

render(<App />, document.getElementById('root'));
