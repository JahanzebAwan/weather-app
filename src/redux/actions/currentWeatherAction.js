import { handleGetRequest } from "../../services/GetTemplate";
export const getCurrentWeather = (location) => async (dispatch) => {
  const res = await handleGetRequest(
    `find?callback=jQuery19105386953673943664_1633515334892&q=${location}&appid=8493b27440382ca5346648dd5110ef62`
  );
  console.log(res);
};
