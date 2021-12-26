/**
 * Event Detail Page
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import React from 'react';
import { useParams } from 'react-router-dom';
// Material UI
import { Grid } from '@mui/material';

/**
 * React Functional Component to generate event detail screen
 *
 * @return {React.ReactElement} Renders event detail screen
 */
function EventDetail(): React.ReactElement {
  // Retrieve eventId from the path
  const { id } = useParams();

  return (
    <>
      <h1>Hello World {id}</h1>
    </>
  );
}

export default EventDetail;
