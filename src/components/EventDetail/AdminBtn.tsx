/**
 * Admin Button to control the event
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import React from 'react';
// Material UI
import { Box, Button, Divider, Typography } from '@mui/material';

// Type for AdminBtn's props
type AdminBtnProps = {
  eventId: string;
  goBackFunc: () => void;
};

/**
 * React Functional Component to generate AdminBtn to control the event on the
 * eventDetail page
 *
 * @param {AdminBtnProps} props Properties that passed from the parent
 *   Component.
 * @return {React.ReactElement} Renders AdminBtn
 */
function AdminBtn(props: AdminBtnProps): React.ReactElement {
  const { eventId, goBackFunc } = props;

  // EventHandler for the admin buttons
  const deleteEvent = React.useCallback((): void => {
    // TODO: Call API to Delete Event
    console.log(`Delete event ${eventId}`);
    goBackFunc();
  }, [goBackFunc, eventId]);

  return (
    <>
      <Divider sx={{ margin: '10px 0' }} />
      <Box sx={{ margin: '15px 0' }}>
        <Typography variant="h6">Admin Only</Typography>
        <Box>
          <Button color="primary" variant="contained" sx={{ margin: '5px' }}>
            Modify Event
          </Button>
          <Button
            color="secondary"
            variant="contained"
            sx={{ margin: '5px' }}
            onClick={deleteEvent}
          >
            Delete Event
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default AdminBtn;
