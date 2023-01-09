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
  //   searchedItem: TItems | {};
  filteredUsers: TItems[];
  isLoading: boolean;
};

const ItemsTable = ({ filteredUsers, isLoading }: TItemsTable) => {
  React.useEffect(() => {
    console.log('isLoading', isLoading);
  }, [isLoading]);
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="simple talbe">
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
            //   ) : Object.keys(searchedItem).length > 0 ? (
            //     <CustomTableRow {...searchedItem} />
            filteredUsers.map((item: TItems) => <CustomTableRow {...item} />)
          ) : (
            <div>No Items Found</div>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ItemsTable;
