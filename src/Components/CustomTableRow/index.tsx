import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { TItems } from '../../types';

interface TCustomTableRow {
  index: number;
}

interface TCustomTableRowWrapper extends TItems, TCustomTableRow {}

const CustomTableRow = ({ index, id, year, name, color }: TCustomTableRowWrapper) => {
  return (
    <TableRow key={index} style={{ backgroundColor: color }}>
      <TableCell align="left">{id}</TableCell>
      <TableCell align="left">{year}</TableCell>
      <TableCell align="left">{name}</TableCell>
    </TableRow>
  );
};

export default CustomTableRow;
