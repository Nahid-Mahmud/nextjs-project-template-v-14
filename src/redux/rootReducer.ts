import { baseApi } from "./api/baseApi";
import userSlice from "@/redux/slice/usersSlice";
export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  user: userSlice,
};
