import React from "react";
import { useDispatch } from "react-redux";
import { getCurrentWeather } from "../../redux/actions/currentWeatherAction";
import SearchFilter from "../../components/SearchFilter/SearchFilter";

function Dashboard() {
  const dispatch = useDispatch();
  const getCurrentWeatherInfo = async (searchData) => {
    await dispatch(getCurrentWeather(searchData));
  };
  return (
    <div>
      <SearchFilter getCurrentWeatherInfo={getCurrentWeatherInfo} />
    </div>
  );
}

export default Dashboard;
