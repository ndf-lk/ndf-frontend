import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IUser {
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

type Nullable<T> = T | null;

export interface UserStore {
  user: Nullable<IUser>;
  setUser: (user: IUser | null) => void;
  clear: () => void;
}

export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (user: IUser | null) => set(() => ({ user: user })),
        clear: () => set(() => ({ user: null })),
      }),

      {
        name: "user-storage",
      }
    )
  )
);
