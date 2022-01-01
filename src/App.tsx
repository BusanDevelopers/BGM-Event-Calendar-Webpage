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
import { LoginContextProvider, useLoginContext } from './LoginData';
const Login = React.lazy(() => import('./Login'));
const Calendar = React.lazy(() => import('./Calendar'));
const EventDetail = React.lazy(() => import('./EventDetail'));

// MUI Theme (Setup Font family)
declare module '@mui/material/styles' {
  interface TypographyVariantsOptions {
    calendarDaysOfWeek?: React.CSSProperties;
    calendarBody?: React.CSSProperties;
    calendarEvent?: React.CSSProperties;
    eventDetailBody?: React.CSSProperties;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    calendarDaysOfWeek: true;
    calendarBody: true;
    calendarEvent: true;
    eventDetailBody: true;
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
    calendarEvent: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: '0.6rem',
      },
    },
    eventDetailBody: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: '0.9rem',
      },
    },
    calendarDaysOfWeek: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.75,
      letterSpacing: '0.00938em',
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: '0.8rem',
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
 * React functional component to render the application's content
 *
 * @return {React.ReactElement} The content of the application
 */
function App(): React.ReactElement {
  // State
  const loginContext = useLoginContext();

  // Initialize Appl.ication
  React.useEffect(() => {
    // When application not initialized
    if (!loginContext.initialized) {
      // check whether admin token alive or not
      if (localStorage.getItem('ADMIN_LOGIN') === 'yes') {
        // TODO: API Call to Renew Token
        loginContext.dispatch({ type: 'INITIALIZE', login: true });
        // TODO: If failed, unset localStorage flag
      } else {
        localStorage.removeItem('ADMIN_LOGIN');
        loginContext.dispatch({ type: 'INITIALIZE', login: false });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route
            path="/"
            element={loginContext.initialized ? <Calendar /> : <Loading />}
          />
          <Route
            path="/:year-:month"
            element={loginContext.initialized ? <Calendar /> : <Loading />}
          />
          <Route
            path="/event/:id"
            element={loginContext.initialized ? <EventDetail /> : <Loading />}
          />
          <Route
            path="/login"
            element={loginContext.initialized ? <Login /> : <Loading />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

/**
 * React functional component to render the application's entry point
 *
 * @return {React.ReactElement} The entry point of the application
 */
function AppWrapper(): React.ReactElement {
  return (
    <React.StrictMode>
      <React.Suspense fallback={<Loading />}>
        <LoginContextProvider>
          <App />
        </LoginContextProvider>
      </React.Suspense>
    </React.StrictMode>
  );
}

render(<AppWrapper />, document.getElementById('root'));
