/**
 * Calendar Box Component
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import React from 'react';
// Material UI
import { Box, Typography } from '@mui/material';

/**
 * Interface for the Component's props
 */
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

// Color of event block with respect to the category of event
const colorMap: { [index: string]: string } = {
  정기모임: 'gold',
  비대면: 'greenyellow',
  etc: 'lightpink',
  more: 'white',
};

/**
 * Function to generate style properties of each event entry
 *
 * @param {string} category event's category
 * @return {object} Style object of event entry
 */
function styleProvider(category: string): object {
  return {
    width: '100%',
    backgroundColor: colorMap[category] ? colorMap[category] : colorMap.etc,
    padding: category === 'more' ? '1px 2px' : '2px 3px',
    margin: '2px 0',
    borderRadius: '3px',
  };
}

/**
 * React Functional Component to generate calendar box representing each date
 *
 * @param {CalendarBoxProps} props Properties that passed from the parent
 *   Component.
 * @return {React.ReactElement} Renders CalendarBox
 */
function CalendarBox(props: CalendarBoxProps): React.ReactElement {
  const { date, eventList } = props;
  // Props
  const [numEventEntry, setNumEventEntry] = React.useState(Number.MAX_VALUE);
  // Ref
  const boxRef = React.useRef(null);
  const eventRef = React.useRef(null);

  // Calculate how many event entry can be displayed in the box
  React.useEffect(() => {
    const onResize = (): void => {
      // When no event ref or boxRef set, do nothing
      if (!eventRef.current || !boxRef.current) {
        return;
      }

      // Retrieve heights
      const boxHeight = (boxRef.current as { clientHeight: number })
        .clientHeight;
      const eventHeight =
        (eventRef.current as { clientHeight: number }).clientHeight + 2;
      // Calculate how many entry can fit in the box
      const numEvents = Math.min(
        Math.max(
          Math.floor(boxHeight / eventHeight) - 1, // Newly calculated
          1 // Minimum 1 event
        ),
        eventList.length // Maximum number of events
      );

      // re-render box when available num event changes
      if (numEventEntry !== numEvents) {
        setNumEventEntry(numEvents);
      }
    };

    // Mount eventListener
    window.addEventListener('resize', onResize);
    onResize();

    // Remove eventListener when component unmounts
    return (): void => {
      window.removeEventListener('resize', onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Method to generate eventEntry Elements
   *
   * @param {CalendarBoxProps.eventList} eventList List of event
   * @param {number} numSlot number of available event to be displayed
   * @return {React.ReactElement[]} Array of React Elements
   */
  const getEventEntryElem = (
    eventList: CalendarBoxProps['eventList'],
    numSlot: number
  ): React.ReactElement[] => {
    const elements = [];
    const displayAll = eventList.length <= numSlot;
    const maxDisplay = displayAll ? eventList.length : numSlot - 1;

    // Display events
    for (let i = 0; i < maxDisplay; ++i) {
      const event = eventList[i];
      elements.push(
        <Box
          ref={i === 0 ? eventRef : null}
          sx={{ ...styleProvider(event.category) }}
          key={`${date}-${i}`}
        >
          <Typography component="div" variant="body2" noWrap>
            {event.name}
          </Typography>
        </Box>
      );
    }

    // Display how many events remaining
    if (!displayAll) {
      elements.push(
        <Box
          ref={numSlot === 1 ? eventRef : null}
          sx={{ ...styleProvider('more'), border: '1px solid black' }}
          key={`${date}-more`}
        >
          <Typography
            component="div"
            variant="body2"
            noWrap
            sx={{ fontWeight: 700 }}
          >
            {eventList.length - numSlot + 1} More
          </Typography>
        </Box>
      );
    }

    return elements;
  };

  return (
    <Box ref={boxRef} sx={{ ...calendarBoxStyle }}>
      {date && (
        <>
          <Typography variant="body1">{date}</Typography>
          {getEventEntryElem(eventList, numEventEntry)}
        </>
      )}
    </Box>
  );
}

export default React.memo(CalendarBox);
