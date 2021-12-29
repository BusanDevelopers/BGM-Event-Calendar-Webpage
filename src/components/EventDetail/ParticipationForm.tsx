/**
 * Participation Form Component
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import React from 'react';
// Material UI
import { Box, TextField, Typography } from '@mui/material';

// Styles
const style = {
  formBox: {
    margin: '10px',
    padding: '15px',
    backgroundColor: 'aliceblue',
    borderRadius: '10px',
  },
  requiredTitle: { color: 'red', marginLeft: '2px' },
};

/**
 * React Functional Component to generate Participation Form to get user's input
 *
 * @return {React.ReactElement} Renders ParticipationForm
 */
function ParticipationForm(): React.ReactElement {
  // States
  const [disabled, setDisabled] = React.useState(false);
  const [name, setName] = React.useState({
    value: '',
    error: false,
    helperText: '',
  });
  const [email, setEmail] = React.useState({
    value: '',
    error: false,
    helperText: '',
  });
  const [phoneNumber, setPhoneNumber] = React.useState({
    value: '',
    error: false,
    helperText: '',
  });
  const [comment, setComment] = React.useState('');

  // TODO: Submit API Request
  const formSubmit: React.FormEventHandler<HTMLFormElement> = React.useCallback(
    (event: React.SyntheticEvent) => {
      event.preventDefault();
    },
    []
  );

  // EventHandlers to modify form input
  const onNameChange: React.ChangeEventHandler = React.useCallback(
    (event: React.ChangeEvent) =>
      setName((prevName) => {
        return { ...prevName, value: (event.target as HTMLInputElement).value };
      }),
    []
  );
  const onEmailChange: React.ChangeEventHandler = React.useCallback(
    (event: React.ChangeEvent) =>
      setEmail((prevEmail) => {
        return {
          ...prevEmail,
          value: (event.target as HTMLInputElement).value,
        };
      }),
    []
  );
  const onPhoneNumberChange: React.ChangeEventHandler = React.useCallback(
    (event: React.ChangeEvent) =>
      setPhoneNumber((prevPN) => {
        return { ...prevPN, value: (event.target as HTMLInputElement).value };
      }),
    []
  );
  const onCommentChange: React.ChangeEventHandler = React.useCallback(
    (event: React.ChangeEvent) =>
      setComment((event.target as HTMLTextAreaElement).value),
    []
  );

  return (
    <>
      <Box sx={{ margin: '15px 0' }}>
        <Typography variant="h5" sx={{ marginBottom: '10px' }}>
          Participation Form
        </Typography>
        <form onSubmit={formSubmit}>
          <Box sx={style.formBox}>
            <Box>
              <Typography variant="h6" component="span">
                Name
              </Typography>
              <Typography
                variant="h6"
                component="span"
                sx={style.requiredTitle}
              >
                *
              </Typography>
            </Box>
            <TextField
              disabled={disabled}
              variant="standard"
              color="primary"
              placeholder="name"
              value={name.value}
              helperText={name.helperText}
              error={name.error}
              margin="normal"
              required
              onChange={onNameChange}
            />
          </Box>
          <Box sx={style.formBox}>
            <Box>
              <Typography variant="h6" component="span">
                Email
              </Typography>
              <Typography
                variant="h6"
                component="span"
                sx={style.requiredTitle}
              >
                *
              </Typography>
            </Box>
            <TextField
              disabled={disabled}
              variant="standard"
              color="primary"
              placeholder="hello@email.com"
              value={email.value}
              helperText={email.helperText}
              error={email.error}
              margin="normal"
              required
              onChange={onEmailChange}
            />
          </Box>
          <Box sx={style.formBox}>
            <Typography variant="h6">Phone Number</Typography>
            <TextField
              disabled={disabled}
              variant="standard"
              color="primary"
              placeholder="01012345678"
              value={phoneNumber.value}
              helperText={phoneNumber.helperText}
              error={phoneNumber.error}
              margin="normal"
              onChange={onPhoneNumberChange}
            />
          </Box>
          <Box sx={style.formBox}>
            <Typography variant="h6">Comment</Typography>
            <TextField
              disabled={disabled}
              variant="standard"
              color="primary"
              placeholder="Write any additional information/comment here"
              value={comment}
              margin="normal"
              multiline
              fullWidth
              onChange={onCommentChange}
            />
          </Box>
        </form>
      </Box>
    </>
  );
}

export default ParticipationForm;
