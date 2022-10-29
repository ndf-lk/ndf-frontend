import jwt_decode from "jwt-decode";
import { JwtPayload } from "../types/jwt-payload.interface";

export const getAuthStorage = () => {
  let values = JSON.parse(localStorage.getItem("auth")!);
  return values;
};

export const isValidToken = () => {
  let values = getAuthStorage();

  if (!values) return false;
  if (!values.idToken?.jwtToken) return false;

  try {
    const decoded_token: JwtPayload = jwt_decode(values?.idToken.jwtToken);
    if (!decoded_token) {
      localStorage.setItem("auth", "");
      return false;
    }

    // token expred - refresh
    if (decoded_token.exp * 1000 < Date.now()) return false;
    return true;
  } catch (error) {
    localStorage.setItem("auth", "");
    console.log(error);
    return false;
  }
};
