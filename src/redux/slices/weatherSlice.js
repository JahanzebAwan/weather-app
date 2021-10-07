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
    CURRENT_WEATHER_INFO_ERROR: (state) => {
      return {
        ...state,
        data: "",
      };
    },
  },
});

export const { CURRENT_WEATHER_INFO_SUCCESS, CURRENT_WEATHER_INFO_ERROR } =
  slice.actions;
export default slice.reducer;
