import {
  CURRENT_WEATHER_INFO_SUCCESS,
  CURRENT_WEATHER_INFO_ERROR,
} from "../slices/weatherSlice";
import { handleGetRequest } from "../../services/GetTemplate";
import { appId } from "../../Config";

export const getCurrentWeather = (searchData) => async (dispatch) => {
  let url = "";
  if (searchData.selectedSearchOption === "n")
    url = `weather?q=${searchData.searchText}&units=metric&appid=${appId}`;
  else url = `weather?zip=${searchData.searchText}&units=metric&appid=${appId}`;
  const res = await handleGetRequest(url);
  if (res?.status === 200) {
    dispatch(CURRENT_WEATHER_INFO_SUCCESS(res.data));
    return res.data;
  } else {
    dispatch(CURRENT_WEATHER_INFO_ERROR());
  }
};
