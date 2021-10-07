import {
  WEEKLY_WEATHER_INFO_SUCCESS,
  WEEKLY_WEATHER_INFO_ERROR,
} from "../slices/weatherSlice";
import { handleGetRequest } from "../../services/GetTemplate";
import { appId } from "../../Config";

export const getWeeklyWeather = (coord) => async (dispatch) => {
  let url = `onecall?lat=${coord.lat}&lon=${coord.lon}&appid=${appId}`;
  const res = await handleGetRequest(url);
  if (res?.status === 200) {
    dispatch(WEEKLY_WEATHER_INFO_SUCCESS(res.data));
  } else {
    dispatch(WEEKLY_WEATHER_INFO_ERROR());
  }
};
