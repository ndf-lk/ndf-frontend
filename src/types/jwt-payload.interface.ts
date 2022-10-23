export interface JwtPayload {
  sub: string;
  "cognito:groups": string[];
  email_verified: boolean;
  iss: string;
  "custom:group": string;
  "cognito:username": string;
  origin_jti: string;
  aud: string;
  event_id: string;
  token_use: string;
  auth_time: number;
  exp: number;
  iat: number;
  jti: string;
  email: string;
}
