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
import { LoginContextProvider } from './LoginData';
const Calendar = React.lazy(() => import('./Calendar'));
const EventDetail = React.lazy(() => import('./EventDetail'));

// MUI Theme (Setup Font family)
declare module '@mui/material/styles' {
  interface TypographyVariantsOptions {
    calendarBody?: React.CSSProperties;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    calendarBody: true;
  }
}
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
    h4: {
      fontWeight: 500,
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: '1.5rem',
      },
    },
    h5: {
      fontWeight: 500,
    },
    subtitle1: {
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: '0.8rem',
      },
    },
    body1: {
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: '0.9rem',
      },
    },
    body2: {
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: '0.6rem',
      },
    },
    calendarBody: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: '0.7rem',
      },
    },
    caption: {
      fontSize: '0.8rem',
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
        <LoginContextProvider>
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
        </LoginContextProvider>
      </React.Suspense>
    </React.StrictMode>
  );
}

render(<App />, document.getElementById('root'));
