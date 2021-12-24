/**
 * Calendar (Main) Page
 *
 * @author Hyecheol (Jerry) Jang
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

const calendarGridColumnStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridGap: '1px',
  height: '100%',
};

const calendarBoxStyle = {
  backgroundColor: 'white',
  padding: '2px',
  overflow: 'hidden',
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
        <Box
          sx={{
            display: 'flex',
            backgroundColor: 'primary.main',
            padding: '2px 10px',
            alignItems: 'center',
          }}
        >
          <Stack
            direction="row"
            sx={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}
          >
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
        <Box sx={{ ...calendarGridColumnStyle }}>
          <Box sx={{ ...calendarBoxStyle }}>1</Box>
          <Box sx={{ ...calendarBoxStyle }}>2</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
          <Box sx={{ ...calendarBoxStyle }}>Hello</Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Calendar;
