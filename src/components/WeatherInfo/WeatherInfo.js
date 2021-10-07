import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Skeleton } from "primereact/skeleton";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

function WeatherInfo() {
  const data = useSelector((state) => state.weatherSlice?.data);
  const [showDeatils, setshowDeatils] = useState(false);
  const [btnLabel, setbtnLabel] = useState("View Details");
  const [btnIcon, setbtnIcon] = useState("pi pi-arrow-right");
  const currentConditions = (
    <React.Fragment>
      <p>{" Current temperature : " + data?.main?.temp + "  °C"}</p>
      <p>{" Condition : " + data?.weather?.[0]?.main}</p>
      <p>{" Feels Like : " + data?.main?.feels_like + "  °C"}</p>
      <p>{" Highest temperature : " + data?.main?.temp_max + "  °C"}</p>
      <p>{" Lowest temperature : " + data?.main?.temp_min + "  °C"}</p>
    </React.Fragment>
  );
  const moreDetails = (
    <React.Fragment>
      <p>{" Pressure : " + data?.main?.pressure + " Hg"}</p>
      <p>{" Humidity : " + data?.main?.humidity + "%"}</p>
      <p>{" Wind Speed : " + data?.wind?.speed}</p>
      <p>{" Sunrise : " + data?.sys?.sunrise}</p>
      <p>{" Sunset : " + data?.sys?.sunset}</p>
    </React.Fragment>
  );
  const handleToggleBtn = () => {
    setshowDeatils(!showDeatils);
    if (showDeatils) {
      setbtnLabel("View Details");
      setbtnIcon("pi pi-arrow-right");
    } else {
      setbtnLabel("Back to Main");
      setbtnIcon("pi pi-arrow-left");
    }
  };
  return (
    <div className="p-pl-4 p-pr-4 p-pb-6">
      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col-6">
          {data === undefined || data === "" ? (
            <Skeleton width="100%" height="250px"></Skeleton>
          ) : (
            <Card title={"Today’s Forecast for " + data.name}>
              <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-8">
                  {showDeatils === false ? currentConditions : moreDetails}
                </div>
                <div className="p-field p-col-4">
                  <img
                    alt="icon"
                    src={
                      "http://openweathermap.org/img/wn/" +
                      data?.weather?.[0]?.icon +
                      "@2x.png"
                    }
                    width="50"
                    height="50"
                  ></img>
                </div>
                <div>
                  <Button
                    icon={btnIcon}
                    iconPos="right"
                    label={btnLabel}
                    className="p-button-rounded p-button-warning"
                    onClick={handleToggleBtn}
                  />
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
