import { createSlice } from "@reduxjs/toolkit";


export const sliceFilter = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        searchQuery(state, action) {
        return (state = action.payload);
      },
      filter(state, action) {},
    },
  });

export const { searchQuery, filter } = sliceFilter.actions;