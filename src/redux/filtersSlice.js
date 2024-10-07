import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    searchStr: "",
  },
  reducers: {
    changeFilter: (state, actions) => {
      state.searchStr = actions.payload;
    },
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;
export const selectNameFilter = (state) => state.filters.searchStr;
