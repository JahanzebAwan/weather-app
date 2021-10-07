import { baseURL } from "../Config";
import axios from "axios";
import { toast } from "react-toastify";

export const handleGetRequest = async (url) => {
  try {
    const response = await axios.get(`${baseURL + url}`, {});
    return response;
  } catch (error) {
    toast.warn(error.response.data.message || "Something went wrong !!");

    return error.response;
  }
};
