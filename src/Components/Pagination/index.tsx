import React from 'react';

import { Pagination } from '@mui/material';
import { Stack } from '@mui/system';

type TPaginationWrapper = {
  page: number | string;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
};

const PaginationWrapper = ({ page, handlePageChange }: TPaginationWrapper) => {
  return (
    <Stack spacing={2}>
      <Pagination count={5} page={+page} onChange={handlePageChange} />
    </Stack>
  );
};

export default PaginationWrapper;
