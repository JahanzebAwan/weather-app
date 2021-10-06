import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentWeather } from "../../redux/actions/currentWeatherAction";

function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCurrentWeatherInfo = async () => {
      await dispatch(getCurrentWeather("Islamabad, ISB, PAK"));
    };
    getCurrentWeatherInfo();
  });
  return <div>Hey</div>;
}

export default Dashboard;
