/**
 * Table which display the participants information for the event
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import React from 'react';
// Material UI
import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
// Globally used Types
import ParticipantInfo from '../../globalType/ParticipantInfo';

// Type for the component's props
type ParticipantsTableProps = {
  eventId: string | number;
  participantsList: ParticipantInfo[];
};

const styles = {
  commentCell: {
    maxHeight: 'inherit',
    width: '100%',
    whiteSpace: 'initial',
    lineHeight: '20px',
    overflow: 'auto',
  },
};

// Column definition for the DataGrid
const columnDef: GridColDef[] = [
  { field: 'participantName', headerName: 'Name', minWidth: 100 },
  { field: 'email', headerName: 'Email', minWidth: 200 },
  { field: 'phoneNumber', headerName: 'Phone Number', minWidth: 140 },
  {
    field: 'comment',
    headerName: 'Comment',
    minWidth: 200,
    flex: 1,
    renderCell: (cellValues) => (
      <Box sx={styles.commentCell}>{cellValues.value}</Box>
    ),
  },
  { field: 'editBtn', headerName: 'Edit', width: 100 },
  { field: 'deleteBtn', headerName: 'Delete', width: 100 },
];

/**
 *
 * @param props
 * @returns
 */
function ParticipantsTable(props: ParticipantsTableProps): React.ReactElement {
  const { eventId, participantsList } = props;
  return (
    <DataGrid
      rows={participantsList}
      columns={columnDef}
      density="compact"
      rowHeight={80}
    />
  );
}

export default ParticipantsTable;
