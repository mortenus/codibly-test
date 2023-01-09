import { configureStore } from '@reduxjs/toolkit';

import { itemsSlice } from './slices';

const store = configureStore({
  reducer: {
    items: itemsSlice,
  },
});

export default store;
