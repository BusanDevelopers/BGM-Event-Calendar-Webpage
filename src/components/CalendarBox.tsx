/**
 * Calendar Box Component
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import React from 'react';
// Material UI
import { Box, Typography } from '@mui/material';

interface CalendarBoxProps {
  date: number;
  eventList: { id: string; name: string; category: string }[];
}

// Styles
const calendarBoxStyle = {
  backgroundColor: 'white',
  padding: '2px',
  overflow: 'hidden',
};

const colorMap: { [index: string]: string } = {
  정기모임: 'gold',
  비대면: 'greenyellow',
  etc: 'lightpink',
};

/**
 * React Functional Component to generate calendar box representing each date
 *
 * @param {CalendarBoxProps} props Properties that passed from the parent
 *   Component.
 * @return {React.ReactElement} Renders CalendarBox
 */
function CalendarBox(props: CalendarBoxProps): React.ReactElement {
  const { date, eventList } = props;

  return (
    <Box sx={{ ...calendarBoxStyle }}>
      {date && (
        <>
          <Typography variant="body1">{date}</Typography>
          {eventList.map((event, index) => {
            return (
              <Box
                sx={{
                  width: '100%',
                  backgroundColor: colorMap[event.category]
                    ? colorMap[event.category]
                    : colorMap.etc,
                  padding: '2px 3px',
                  margin: '2px 0',
                  borderRadius: '3px',
                }}
                key={`${date}-${index}`}
              >
                <Typography component="div" variant="body2" noWrap>
                  {event.name}
                </Typography>
              </Box>
            );
          })}
        </>
      )}
    </Box>
  );
}

export default React.memo(CalendarBox);
