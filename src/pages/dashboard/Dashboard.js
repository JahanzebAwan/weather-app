import React from "react";
import { useDispatch } from "react-redux";
import { getCurrentWeather } from "../../redux/actions/currentWeatherAction";
import { getWeeklyWeather } from "../../redux/actions/weeklyWeatherAction";
import SearchFilter from "../../components/SearchFilter/SearchFilter";
import WeatherInfo from "../../components/WeatherInfo/WeatherInfo";

function Dashboard() {
  const dispatch = useDispatch();
  const getCurrentWeatherInfo = async (searchData) => {
    const res = await dispatch(getCurrentWeather(searchData));
    dispatch(getWeeklyWeather(res?.coord));
  };
  return (
    <div>
      <SearchFilter getCurrentWeatherInfo={getCurrentWeatherInfo} />
      <WeatherInfo />
    </div>
  );
}

export default Dashboard;
