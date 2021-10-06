import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "weatherSlice",
  initialState: {
    data: "",
  },
  reducers: {
    CURRENT_WEATHER_INFO_SUCCESS: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
    LOGIN_ERROR: (state) => {
      return {
        ...state,
        data: "",
      };
    },
  },
});

export const { LOGIN_SUCCESS, LOGIN_ERROR } = slice.actions;
export default slice.reducer;
