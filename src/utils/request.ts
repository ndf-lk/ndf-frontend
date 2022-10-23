import axios from "axios";
import { getAuthStorage } from "./auth_token";
import ENVIRONMENT from "../config";

const authStorage = getAuthStorage();

export default axios.create({
  baseURL: ENVIRONMENT.BACKEND_API,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${authStorage?.idToken?.jwtToken}`,
  },
});
