/**
 * Event Participants List screen - Admin only
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
// Material UI
import { Box, Divider, Grid, IconButton, Typography } from '@mui/material';
// Material UI Icon
import { ArrowCircleLeftOutlined } from '@mui/icons-material';
// Global Style & Type
import headerStyle from './globalStyle/headerStyle';
import EventDetailData from './globalType/EventDetailData';
// Custom Hook to load LoginContext
import { useLoginContext } from './LoginData';
// Components
import AccountBtn from './components/AccountBtn';

const styles = {
  gridWrapper: { height: '100%' },
  backBtn: { height: '32px', width: '32px', color: 'white' },
  ...headerStyle,
};

type participantInfo = {
  id: number | string;
  participantName: string;
  email: string;
  phoneNumber?: string;
  comment?: string;
};

type ParticipantsDetailData = {
  numParticipants: number;
  participantsList: participantInfo[];
};

/**
 * React Functional Component to generate event participant list screen
 *   Admin only.
 *
 * @return {React.ReactElement} Renders event participants screen
 */
function EventParticipants(): React.ReactElement {
  const { state } = useLocation();
  const navigate = useNavigate();
  // State
  const loginContext = useLoginContext();
  const [eventDetail, setEventDetail] = React.useState<EventDetailData | null>(
    null
  );
  const [dateString, setDateString] = React.useState('');
  const [participantsDetail, setParticipantsDetail] =
    React.useState<ParticipantsDetailData | null>(null);

  // Retrieve eventId from the path
  const { id } = useParams();
  if (!id) {
    // TODO Redirect to 404 page
  }

  // TODO: Load Event Detail and Participants Detail
  // TODO: On First Load

  // Function to direct user to previous location
  const goBack = React.useCallback((): void => {
    if ((state as { prevLocation: string })?.prevLocation) {
      navigate((state as { prevLocation: string }).prevLocation);
    } else {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Check for whether admin logged in or not
  React.useEffect(() => {
    if (!loginContext.login) {
      goBack();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loginContext.login && (
        <>
          <Grid
            container
            direction="column"
            wrap="nowrap"
            sx={styles.gridWrapper}
          >
            <Grid item>
              <Box sx={styles.headerWrapper}>
                <IconButton sx={{ padding: '4px' }} onClick={goBack}>
                  <ArrowCircleLeftOutlined sx={styles.backBtn} />
                </IconButton>
                <Box
                  sx={{ ...styles.headerTitleWrapper, display: 'inline-flex' }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: 'white' }}
                  >
                    Participants List
                  </Typography>
                </Box>
                <AccountBtn />
              </Box>
            </Grid>
            {eventDetail && (
              <>
                <Grid item></Grid>
                <Divider sx={{ margin: '10px 0' }} />
                {participantsDetail && <Grid item></Grid>}
              </>
            )}
          </Grid>
        </>
      )}
    </>
  );
}

export default EventParticipants;
