import axios from "axios";
import { getItem, removeItem } from "../common/storage.services";

// const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: "https://acadapi.etacorealtime.ir/api",
});

const onSuccess = (response) => {
  return response.data;
};

const onError = (err) => {
  if (err.response.status === 401) {
    removeItem("token");
    window.location.pathname = "/login";
  }
  if (err.response.status === 403) {
    removeItem("token");
    window.alert("دسترسی ندارید");
  }

  return Promise.reject(err);
};

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((opt) => {
  const token = getItem("token");
  if (token) opt.headers.Authorization = "bearer " + token;

  return opt;
});

export default instance;
