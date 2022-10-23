import jwt_decode from "jwt-decode";
import { JwtPayload } from "../types/jwt-payload.interface";

export const getAuthStorage = () => {
  let values = JSON.parse(localStorage.getItem("auth")!);
  return values;
};

export const isValidToken = () => {
  let values = getAuthStorage();

  if (!values) return false;
  if (!values.idToken.jwtToken) return false;

  const decoded_token: JwtPayload = jwt_decode(values?.idToken.jwtToken);

  // token expred - refresh
  if (decoded_token.exp * 1000 < Date.now()) return false;
  return true;
};
