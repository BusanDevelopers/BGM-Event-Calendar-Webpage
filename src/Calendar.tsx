/**
 * Calendar (Main) Page
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
 * Function to retrieve current year and month
 *
 * @return {{year: number, month: number}} return year (fullYear)
 *   and month (monthIndex)
 */
function getCurrentYearMonth(): { year: number; month: number } {
  const currDate = new Date();
  return { year: currDate.getFullYear(), month: currDate.getMonth() };
}

/**
 * React Functional Component to generate calendar screen
 *
 * @return {React.ReactElement} Renders Calendar screen
 */
function Calendar(): React.ReactElement {
  const navigate = useNavigate();
  // Retrieve year and month from path
  const params = useParams();
  let { year, month } = getCurrentYearMonth(); // Default: current year/month
  if (params.year && params.month) {
    year = parseInt(params.year);
    month = parseInt(params.month) - 1;
    // If either year or month is NaN, redirect to 404 page
    if (isNaN(year) || isNaN(month)) {
      // TODO redirect to 404 page
    }
  }
  const currentMonthDate = new Date(year, month, 1);

  /**
   * Helper method to change month
   *
   * @param {number} move 1 for forward, -1 for backward
   */
  const moveMonth = React.useCallback(
    (move: number): void => {
      const moveTargetMonthDate = new Date(year, month + move);
      const newYear = moveTargetMonthDate.getFullYear();
      const newMonth = moveTargetMonthDate.getMonth() + 1;
      navigate(`../${newYear}-${newMonth}`);
    },
    [year, month, navigate]
  );

  return (
    <Grid container direction="column" sx={{ height: '100%' }}>
      <Grid item>
        <Box sx={{ ...styles.headerWrapper }}>
          <Stack direction="row" sx={{ ...styles.headerTitleWrapper }}>
            <IconButton
              onClick={(): void => moveMonth(-1)}
              sx={{ color: 'lightgray' }}
            >
              <ArrowBackIosRounded />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ color: 'white' }}>
              {currentMonthDate.toLocaleDateString('en-US', { month: 'short' })}
              . {year}
            </Typography>
            <IconButton
              onClick={(): void => moveMonth(1)}
              sx={{ color: 'lightgray' }}
            >
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
