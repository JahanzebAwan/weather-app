import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "weatherSlice",
  initialState: {
    data: "",
    weeklyData: "",
  },
  reducers: {
    CURRENT_WEATHER_INFO_SUCCESS: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
    CURRENT_WEATHER_INFO_ERROR: (state) => {
      return {
        ...state,
        data: "",
      };
    },
    WEEKLY_WEATHER_INFO_SUCCESS: (state, action) => {
      return {
        ...state,
        weeklyData: action.payload,
      };
    },
    WEEKLY_WEATHER_INFO_ERROR: (state) => {
      return {
        ...state,
        weeklyData: "",
      };
    },
  },
});

export const {
  CURRENT_WEATHER_INFO_SUCCESS,
  CURRENT_WEATHER_INFO_ERROR,
  WEEKLY_WEATHER_INFO_SUCCESS,
  WEEKLY_WEATHER_INFO_ERROR,
} = slice.actions;
export default slice.reducer;
