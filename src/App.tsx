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
import { Typography } from '@mui/material';
// Font
import '@fontsource/ibm-plex-sans-kr/300.css';
import '@fontsource/ibm-plex-sans-kr/400.css';
import '@fontsource/ibm-plex-sans-kr/500.css';
import '@fontsource/ibm-plex-sans-kr/700.css';

const theme = createTheme({
  typography: {
    fontFamily: '"IBM Plex Sans KR", sans-serif',
  },
});

const App = (): React.ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <Typography align="center" variant="h6">
        Hello World 안녕하세요.
      </Typography>
    </ThemeProvider>
  );
};

render(<App />, document.getElementById('root'));
