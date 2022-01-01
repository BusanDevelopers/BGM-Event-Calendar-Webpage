/**
 * Component to render account button
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// Material UI
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
// Material UI Icon
import { AccountCircle } from '@mui/icons-material';
// Custom Hook to load LoginContext
import { useLoginContext } from '../LoginData';

/**
 * React Functional Component to generate account button
 *
 * @return {React.ReactElement} Renders account button
 */
function AccountBtn(): React.ReactElement {
  const navigate = useNavigate();
  const location = useLocation();
  // State
  const loginContext = useLoginContext();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // EventHandler
  const handleOpenAdminMenu = React.useCallback(
    (event: React.MouseEvent<HTMLElement>): void => {
      if (loginContext.login) {
        // When admin logged in, open admin menu
        setAnchorEl(event.currentTarget);
      } else {
        navigate('/login', { state: { prevLocation: location.pathname } });
      }
    },
    [loginContext.login, navigate, location.pathname]
  );
  const handleCloseAdminMenu = React.useCallback((): void => {
    setAnchorEl(null);
  }, []);

  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton onClick={handleOpenAdminMenu} sx={{ padding: '4px' }}>
        <AccountCircle sx={{ height: '32px', width: '32px', color: 'white' }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(anchorEl)}
        onClose={handleCloseAdminMenu}
      >
        <MenuItem>
          <Typography textAlign="center">Change PW</Typography>
        </MenuItem>
        <MenuItem>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default React.memo(AccountBtn);
