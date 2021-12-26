/**
 * Modal which pops up when user clicks the date
 *   - Display all events
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
// Material UI
import { Backdrop, Box, Divider, Fade, Modal, Typography } from '@mui/material';

/**
 * Interface for Component's props
 */
interface DateEventModalProps {
  isOpen: boolean;
  handleClose: () => void;
  dateString: string;
  eventList: { id: string; name: string; category: string }[];
  colorScheme: { [index: string]: string };
}

const style = {
  modalWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '75%',
    width: '90%',
    maxWidth: '450px',
    p: 1,
    bgcolor: 'background.paper',
    border: '2px solid black',
    borderRadius: '10px',
    boxShadow: 24,
    display: 'flex',
    flexDirection: 'column',
  },
  noEvent: {
    width: '100%',
    height: '100%',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontStyle: 'italic',
    color: 'gray',
  },
};

/**
 * Function to generate style properties of each event entry
 *
 * @param {object} colorMap Map having color for each event category
 * @param {string} category event category
 * @return {object} Style object of each event entry
 */
function eventStyleProvider(
  colorMap: DateEventModalProps['colorScheme'],
  category: string
): object {
  return {
    width: '100%',
    backgroundColor: colorMap[category] ? colorMap[category] : colorMap.etc,
    margin: '5px 0',
    padding: '4px 5px',
    borderRadius: '6px',
  };
}

/**
 * React Functional Component to generate modal which displays all events of the
 *   given date
 *
 * @param {DateEventModalProps} props Properties that passed from the parent
 *   Component.
 * @return {React.ReactElement} Renders DateEventModal
 */
function DateEventModal(props: DateEventModalProps): React.ReactElement {
  const { isOpen, handleClose, dateString, eventList, colorScheme } = props;
  const navigate = useNavigate();

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={isOpen}>
        <Box sx={style.modalWrapper}>
          <Typography
            variant="h6"
            component="div"
            align="center"
            sx={{ margin: '3px 0', fontWeight: 500 }}
          >
            {dateString}
          </Typography>
          <Divider />
          <Box sx={{ margin: '3px 0', overflowY: 'auto', flexGrow: 1 }}>
            {eventList.length !== 0 ? (
              eventList.map((event) => {
                return (
                  <Box
                    sx={{ ...eventStyleProvider(colorScheme, event.category) }}
                    onClick={(): void => navigate(`/event/${event.id}`)}
                    key={event.id}
                  >
                    <Typography
                      component="div"
                      variant="body1"
                      sx={{ fontSize: '1.1rem', fontWeight: 500 }}
                    >
                      {event.name}
                    </Typography>
                  </Box>
                );
              })
            ) : (
              <Typography
                component="div"
                variant="h5"
                align="center"
                sx={style.noEvent}
              >
                No Events
              </Typography>
            )}
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}

export default DateEventModal;
