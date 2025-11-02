import { logoutUser } from "@/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/app/store";

function useAuth() {
  const dispatch = useDispatch<AppDispatch>();
  const { user, isLoggedIn } = useSelector((state: RootState) => state.auth);
  const logout = () => {
    dispatch(logoutUser());
  }
  return { user, isLoggedIn, logout };
}

export default useAuth;
