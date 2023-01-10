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

type TItemsTable = {
  filteredUsers: TItems[];
  isLoading: boolean;
};

const tableHeadRows = ['ID', 'Year', 'Name'];

const ItemsTable = ({ filteredUsers, isLoading }: TItemsTable) => {
  return (
    <TableContainer style={{ height: '330px' }} component={Paper}>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeadRows.map((item, index) => (
              <TableCell key={index} align="left">
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell />
              <TableCell align="center">Loading...</TableCell>
              <TableCell />
            </TableRow>
          ) : filteredUsers ? (
            filteredUsers.map(({ id, year, name, color }: TItems) => (
              <TableRow key={id} style={{ backgroundColor: color }}>
                <TableCell align="left">{id}</TableCell>
                <TableCell align="left">{year}</TableCell>
                <TableCell align="left">{name}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell align="center">No Items Found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ItemsTable;
