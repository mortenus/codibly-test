import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { TItems } from '../../types';

const CustomTableRow = ({ id, year, name, color }: TItems) => {
  return (
    <TableRow key={id} style={{ backgroundColor: color }}>
      <TableCell align="left">{id}</TableCell>
      <TableCell align="left">{year}</TableCell>
      <TableCell align="left">{name}</TableCell>
    </TableRow>
  );
};

export default CustomTableRow;
