import axios from "axios";
import { getAuthStorage } from "./auth_token";
import ENVIRONMENT from "../config";
import { useTokenStore } from "../store/createAuthStore";

const authStorage = getAuthStorage();

export default axios.create({
  baseURL: ENVIRONMENT.BACKEND_API,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${authStorage}`,
  },
});
