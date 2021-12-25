/**
 * Calendar Box Component
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import React from 'react';
// Material UI
import { Box } from '@mui/material';

// Styles
const calendarBoxStyle = {
  backgroundColor: 'white',
  padding: '2px',
  overflow: 'hidden',
};

/**
 * React Functional Component to generate calendar box representing each date
 *
 * @return {React.ReactElement} Renders CalendarBox
 */
function CalendarBox(): React.ReactElement {
  return <Box sx={{ ...calendarBoxStyle }}>Hello</Box>;
}

export default CalendarBox;
