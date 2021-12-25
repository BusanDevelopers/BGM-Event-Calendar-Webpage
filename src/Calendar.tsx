/**
 * Calendar (Main) Page
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import React from 'react';
// Material UI
import { Box, Grid, IconButton, Stack, Typography } from '@mui/material';
// Material UI Icons
import {
  AccountCircle,
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from '@mui/icons-material';
// Components
import CalendarBox from './components/CalendarBox';

// Styles
const styles = {
  headerWrapper: {
    display: 'flex',
    backgroundColor: 'primary.main',
    padding: '2px 10px',
    alignItems: 'center',
  },
  headerTitleWrapper: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarGridColumn: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridGap: '1px',
    height: '100%',
  },
};

/**
 * React Functional Component to generate calendar screen
 *
 * @return {React.ReactElement} Renders Calendar screen
 */
function Calendar(): React.ReactElement {
  return (
    <Grid container direction="column" sx={{ height: '100%' }}>
      <Grid item>
        <Box sx={{ ...styles.headerWrapper }}>
          <Stack direction="row" sx={{ ...styles.headerTitleWrapper }}>
            <IconButton sx={{ color: 'lightgray' }}>
              <ArrowBackIosRounded />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ color: 'white' }}>
              Dec. 2021
            </Typography>
            <IconButton sx={{ color: 'lightgray' }}>
              <ArrowForwardIosRounded />
            </IconButton>
          </Stack>
          <IconButton sx={{ padding: '4px' }}>
            <AccountCircle
              sx={{ height: '32px', width: '32px', color: 'white' }}
            />
          </IconButton>
        </Box>
      </Grid>
      <Grid item sx={{ flexGrow: 1, backgroundColor: 'gray' }}>
        <Box sx={{ ...styles.calendarGridColumn }}>
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
          <CalendarBox />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Calendar;
