import React from 'react';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { TItems } from '../../types';
import CustomTableRow from '../CustomTableRow';

type TItemsTable = {
  filteredUsers: TItems[];
  isLoading: boolean;
};

const ItemsTable = ({ filteredUsers, isLoading }: TItemsTable) => {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">Year</TableCell>
            <TableCell align="left">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <div>Loading...</div>
          ) : filteredUsers ? (
            filteredUsers.map((item: TItems, index) => <CustomTableRow index={index} {...item} />)
          ) : (
            <div>No Items Found</div>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ItemsTable;
