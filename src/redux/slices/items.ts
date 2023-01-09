import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const numberOfItemsPerPage = 5;

const getPaginationCount = (
  totalItemsCount: number,
  numberOfItemsPerPage: number,
  page: number,
) => {
  const start = (page - 1) * numberOfItemsPerPage + 1;
  const end = Math.min(start + numberOfItemsPerPage - 1, totalItemsCount);

  return { start, end };
};

// AsyncThunks
const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  const res = await axios.get('https://reqres.in/api/products').then((data) => data.data.data);

  return res;
});

const items = createSlice({
  name: 'items',
  initialState: {
    users: [],
    filteredUsers: [],
    pages: 0,
    page: 1,
    count: {
      start: 1,
      end: numberOfItemsPerPage,
    },
    loading: true,
  },
  reducers: {
    setCount: (state, action) => {
      const page = action.payload;

      state.page = page;
      state.count = getPaginationCount(state.users.length, numberOfItemsPerPage, page);
    },

    filterItems: (state) => {
      const filtered = state.users.slice(state.count.start - 1, state.count.end);
      state.filteredUsers = filtered;
    },

    setFilteredItems: (state, { payload }) => {
      state.filteredUsers = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchItems.fulfilled, (state, { payload }) => {
      state.users = payload;
      const howManyTotalPages = Math.ceil(payload.length / numberOfItemsPerPage);
      state.pages = howManyTotalPages;
      state.loading = false;
    });

    builder.addCase(fetchItems.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setCount, filterItems, setFilteredItems } = items.actions;
export { fetchItems };
export default items.reducer;
