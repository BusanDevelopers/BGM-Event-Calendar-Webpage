/**
 * Admin Change Password Page
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// Material UI
import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
// Custom Hooks to load LoginContext
import { useLoginContext } from './LoginData';
// Styles
import styles from './globalStyle/accountStyle';

/**
 * React Functional Component to generate Change Password view
 *
 * @return {React.ReactElement} Renders Change Password View
 */
function ChangePW(): React.ReactElement {
  const { state } = useLocation();
  const navigate = useNavigate();
  // State
  const loginContext = useLoginContext();
  const [disabled, setDisabled] = React.useState(false);
  const [currentPW, setCurrentPW] = React.useState('');
  const [newPW, setNewPW] = React.useState('');
  const [confirmPW, setConfirmPW] = React.useState('');
  const [error, setError] = React.useState({ error: false, msg: '' });

  // Function to direct user to previous location
  const goBack = React.useCallback((): void => {
    if ((state as { prevLocation: string })?.prevLocation) {
      navigate((state as { prevLocation: string }).prevLocation);
    } else {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // EventHandlers to modify form inputs
  const onCurrentPWChange: React.ChangeEventHandler = React.useCallback(
    (event: React.ChangeEvent) =>
      setCurrentPW((event.target as HTMLInputElement).value),
    []
  );
  const onNewPWChange: React.ChangeEventHandler = React.useCallback(
    (event: React.ChangeEvent) =>
      setNewPW((event.target as HTMLInputElement).value),
    []
  );
  const onConfirmPWChange: React.ChangeEventHandler = React.useCallback(
    (event: React.ChangeEvent) =>
      setConfirmPW((event.target as HTMLInputElement).value),
    []
  );

  // Helper function to check input
  const inputCheck = React.useCallback((): boolean => {
    if (currentPW === '' || newPW === '' || confirmPW === '') {
      // All field should not be empty
      setError({ error: true, msg: 'All fields are required!!' });
      return false;
    } else if (currentPW === newPW) {
      // current PW and new PW cannot be same
      setError({
        error: true,
        msg: 'Current password and new password should be different',
      });
      return false;
    } else if (newPW !== confirmPW) {
      // new password and confirm password is different
      setError({
        error: true,
        msg: 'New password and confirm password are different. Please check again',
      });
      return false;
    }
    return true;
  }, [confirmPW, currentPW, newPW]);

  // Submit Event Handler
  const formSubmit: React.FormEventHandler<HTMLFormElement> = React.useCallback(
    (event: React.SyntheticEvent) => {
      event.preventDefault();
      setDisabled(true);
      // Check validity of inputs
      if (!inputCheck()) {
        setDisabled(false);
        return;
      }

      // TODO: Submit API Request
      console.log('Change PW Request');
      console.log(currentPW);
      console.log(newPW, confirmPW);
      goBack();
    },
    [confirmPW, currentPW, newPW, goBack, inputCheck]
  );

  // EventHandler to close alert
  const closeAlert = React.useCallback(() => {
    setError({ error: false, msg: '' });
  }, []);

  // Check whether user is signed in or not
  // Only allow for signed in admin user
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
          <Box sx={styles.Wrapper}>
            <Typography variant="h5" sx={{ mb: '10px' }}>
              Change Password
            </Typography>
            <form onSubmit={formSubmit} style={styles.FormWrapper}>
              <TextField
                disabled={disabled}
                size="small"
                variant="outlined"
                color="primary"
                label="Current Password"
                type="password"
                margin="normal"
                value={currentPW}
                onChange={onCurrentPWChange}
                sx={{ margin: '5px 0', width: '100%' }}
              />
              <TextField
                disabled={disabled}
                size="small"
                variant="outlined"
                color="primary"
                label="New Password"
                type="password"
                margin="normal"
                value={newPW}
                onChange={onNewPWChange}
                sx={{ margin: '5px 0', width: '100%' }}
              />
              <TextField
                disabled={disabled}
                size="small"
                variant="outlined"
                color="primary"
                label="Confirm Password"
                type="password"
                margin="normal"
                value={confirmPW}
                onChange={onConfirmPWChange}
                sx={{ margin: '5px 0', width: '100%' }}
              />
              <Box sx={styles.ButtonWrapper}>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  disabled={disabled}
                  sx={{ width: 'calc(50% - 10px)' }}
                >
                  Change PW
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  disabled={disabled}
                  sx={{ width: 'calc(50% - 10px)' }}
                  onClick={goBack}
                >
                  Cancel
                </Button>
              </Box>
            </form>
          </Box>
          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            autoHideDuration={5000}
            open={error.error}
            onClose={closeAlert}
          >
            <Alert onClose={closeAlert} severity="error">
              {error.msg}
            </Alert>
          </Snackbar>
        </>
      )}
    </>
  );
}

export default ChangePW;
