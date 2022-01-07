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
// Override CSS
import './ParticipantsTable.css';

// Type for the component's props
type ParticipantsTableProps = {
  eventId: string | number;
  participantsList: ParticipantInfo[];
};

// Styles
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
  {
    field: 'participantName',
    headerName: 'Name',
    headerAlign: 'center',
    headerClassName: 'ParticipantsTable-cellStyle',
    minWidth: 100,
  },
  {
    field: 'email',
    headerName: 'Email',
    headerAlign: 'center',
    headerClassName: 'ParticipantsTable-cellStyle',
    minWidth: 200,
  },
  {
    field: 'phoneNumber',
    headerName: 'Phone Number',
    headerAlign: 'center',
    headerClassName: 'ParticipantsTable-cellStyle',
    minWidth: 140,
  },
  {
    field: 'comment',
    headerName: 'Comment',
    headerAlign: 'center',
    headerClassName: 'ParticipantsTable-cellStyle',
    minWidth: 200,
    flex: 1,
    renderCell: (cellValues): React.ReactElement => (
      <Box sx={styles.commentCell}>{cellValues.value}</Box>
    ),
  },
  {
    field: 'editBtn',
    headerName: 'Edit',
    headerAlign: 'center',
    headerClassName: 'ParticipantsTable-cellStyle',
    width: 100,
  },
  {
    field: 'deleteBtn',
    headerName: 'Delete',
    headerAlign: 'center',
    headerClassName: 'ParticipantsTable-cellStyle',
    width: 100,
  },
];

/**
 * React Functional Component to generate DataGrid to display the participant's
 *   information.
 *
 * @param {ParticipantsTableProps} props Properties that passed from the parent
 *   Component.
 * @return {React.ReactElement} Renders ParticipantsTable
 */
function ParticipantsTable(props: ParticipantsTableProps): React.ReactElement {
  const { eventId, participantsList } = props;

  return (
    <DataGrid
      rows={participantsList}
      columns={columnDef}
      density="compact"
      rowHeight={80}
      showCellRightBorder
      showColumnRightBorder
    />
  );
}

export default ParticipantsTable;
