import jwt_decode from "jwt-decode";
import { getAuthToken } from "../helpers/token";
import { JwtPayload } from "../types/jwt-payload.interface";

export const isValidToken = () => {
  let values = getAuthToken();

  if (!values) return false;

  try {
    const decoded_token: JwtPayload = jwt_decode(values);

    if (!decoded_token) {
      return false;
    }

    if (decoded_token.exp * 1000 < Date.now()) return false;
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const decodeToken = () => {
  let values = getAuthToken();

  if (!values) return null;

  try {
    const decoded_token: JwtPayload = jwt_decode(values);

    if (!decoded_token) {
      return null;
    }

    if (decoded_token.exp * 1000 < Date.now()) return null;

    return decoded_token;
  } catch (error) {
    return null;
  }
};
