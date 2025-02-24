import createAuthRefreshInterceptor from "axios-auth-refresh";
import axios from "axios";

import { ENV_VARS } from "../constants/env.const";

export const axiosAuthInstance = axios.create({
  baseURL: ENV_VARS.AUTH_API,
});

export const axiosDataInstance = axios.create({
  baseURL: ENV_VARS.DATA_API,
});

const refreshAuthLogic = async () => {
  const res = await axios.post(ENV_VARS.AUTH_API + "/refresh", null, {
    withCredentials: true,
  });
  localStorage.setItem("token", res.data.token);
};

createAuthRefreshInterceptor(axiosDataInstance, refreshAuthLogic);
