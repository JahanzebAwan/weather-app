import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { Card } from "primereact/card";
import { Skeleton } from "primereact/skeleton";
import { useSelector } from "react-redux";

function WeeklyWeatherInfo() {
  const [weeklyData, setweeklyData] = useState("");
  const data = useSelector((state) => state.weatherSlice?.weeklyData?.daily);
  const location = useSelector((state) => state.weatherSlice?.data?.name);
  useEffect(() => {
    setweeklyData(data);
  }, [data]);
  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "600px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "480px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  const timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + " " + month + " " + year + " ";
    return time;
  };
  const template = (item) => {
    return (
      <div>
        <div>
          <div className="p-mb-3">
            <img
              alt="icon"
              src={
                "http://openweathermap.org/img/wn/" +
                item?.weather?.[0]?.icon +
                "@2x.png"
              }
              width="50"
              height="50"
            ></img>
          </div>
          <div>
            <h4 className="p-mb-1 p-mb-2">{timeConverter(item.dt)}</h4>
            <h6 className="p-mt-0 p-mb-2">Max temp {item.temp.max} °C</h6>
            <h6 className="p-mt-0 p-mb-2">Min temp {item.temp.min} °C</h6>
            <span>{item?.weather?.[0]?.main}</span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {weeklyData ? (
        <Card title={"Weekly Forecast for " + location}>
          <Carousel
            value={weeklyData}
            numVisible={3}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            circular
            autoplayInterval={1000}
            itemTemplate={template}
          />
        </Card>
      ) : (
        <Card>
          <Skeleton width="100%" height="250px"></Skeleton>
        </Card>
      )}
    </div>
  );
}

export default WeeklyWeatherInfo;
