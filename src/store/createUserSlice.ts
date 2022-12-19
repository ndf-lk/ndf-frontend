import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IUser {
  _id: string;
  cid: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  profileImgUrl: string;
  address: string;
  district: string;
  position: string;
  birthDay: string;
  seat: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
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
