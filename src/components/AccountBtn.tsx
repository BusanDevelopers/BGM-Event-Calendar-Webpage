/**
 * Component to render account button
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import React from 'react';
// Material UI
import { IconButton } from '@mui/material';
// Material UI Icon
import { AccountCircle } from '@mui/icons-material';

/**
 * React Functional Component to generate account button
 *
 * @return {React.ReactElement} Renders account button
 */
function AccountBtn(): React.ReactElement {
  return (
    <IconButton sx={{ padding: '4px' }}>
      <AccountCircle sx={{ height: '32px', width: '32px', color: 'white' }} />
    </IconButton>
  );
}

export default AccountBtn;
