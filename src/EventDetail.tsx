/**
 * Event Detail Page
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
// Material UI
import { Box, Divider, Grid, IconButton, Typography } from '@mui/material';
// Material UI Icon
import { ArrowCircleLeftOutlined } from '@mui/icons-material';
// Components
import AccountBtn from './components/AccountBtn';
import ParticipationForm from './components/EventDetail/ParticipationForm';
// Global Style
import headerStyle from './globalStyle/headerStyle';

// Type definition for EventDetailData
type EventDetailData = {
  year: number;
  month: number;
  date: number;
  name: string;
  category?: string;
  detail?: string;
};

// Styles
const styles = {
  gridWrapper: { height: '100%' },
  backBtn: { height: '32px', width: '32px', color: 'white' },
  detailWrapper: {
    flexGrow: 1,
    display: 'inline-flex',
    justifyContent: 'center',
  },
  ...headerStyle,
};

// Data
const currentDate = new Date();
const data: { [index: string]: EventDetailData } = {
  1: {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
    date: 14,
    name: '디스코드 비대면 모각코',
    detail:
      '디스코드 방에 신규로 가입하고자 하시는 분들은 abc@gmail.com으로 연락 부탁드립니다.',
  },
  2: {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
    date: 24,
    name: '서면 스타벅스 정기 모임',
    category: '정기모임',
  },
  3: {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
    date: 28,
    name: 'mm 정기모임 - 당신이 사랑하는 프로그래밍 언어는?',
    category: '비대면',
    detail: '참여하실 분은 신청시 음(mm) 아이디를 적어주세요.',
  },
  4: {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
    date: 28,
    name: '디스코드 비대면 모각코',
  },
};

/**
 * React Functional Component to generate event detail screen
 *
 * @return {React.ReactElement} Renders event detail screen
 */
function EventDetail(): React.ReactElement {
  const { state } = useLocation();
  const navigate = useNavigate();
  // State
  const [eventDetail, setEventDetail] = React.useState<EventDetailData | null>(
    null
  );
  const [dateString, setDateString] = React.useState('');

  // Retrieve eventId from the path
  const { id } = useParams();
  if (!id) {
    // TODO Redirect to 404 page
  }

  // TODO: API Call
  React.useEffect(() => {
    const response = data[id as string];
    const eventDate = new Date(
      response.year,
      response.month - 1,
      response.date
    );
    setEventDetail(response);
    setDateString(
      `${eventDate.toLocaleDateString('en-US', {
        month: 'short',
      })}. ${String(response.date).padStart(2, '0')}. ${response.year}`
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Function to direct user to previous location
   */
  const goBack = React.useCallback((): void => {
    if ((state as { prevLocation: string })?.prevLocation) {
      navigate((state as { prevLocation: string }).prevLocation);
    } else {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container direction="column" wrap="nowrap" sx={styles.gridWrapper}>
      <Grid item>
        <Box sx={styles.headerWrapper}>
          <IconButton sx={{ padding: '4px' }} onClick={goBack}>
            <ArrowCircleLeftOutlined sx={styles.backBtn} />
          </IconButton>
          <Box sx={{ ...styles.headerTitleWrapper, display: 'inline-flex' }}>
            <Typography variant="h6" component="div" sx={{ color: 'white' }}>
              Event Detail
            </Typography>
          </Box>
          <AccountBtn />
        </Box>
      </Grid>
      {eventDetail && (
        <Grid item sx={styles.detailWrapper}>
          <Box sx={{ width: '100%', maxWidth: '800px', padding: '20px 7px' }}>
            <Typography variant="h4">{eventDetail.name}</Typography>
            {eventDetail.category ? (
              <Typography variant="caption">{eventDetail.category}</Typography>
            ) : (
              <Typography variant="caption">No Category</Typography>
            )}
            <Divider sx={{ margin: '10px 0' }} />
            <Typography variant="body1">Event Date: {dateString}</Typography>
            {eventDetail.detail && (
              <Box sx={{ margin: '15px 0' }}>
                <Typography variant="h6">Detail</Typography>
                <Typography variant="body1">{eventDetail.detail}</Typography>
              </Box>
            )}
            <Divider sx={{ margin: '10px 0' }} />
            <ParticipationForm />
          </Box>
        </Grid>
      )}
    </Grid>
  );
}

export default EventDetail;
