import { getUser, getUsers } from "./authService";
import type { User } from "./authTypes";

export const updateUserService = (userData: User) => {
  const users = getUsers();
  const user = getUser();
  if (user) {
    const updatedUser = { ...user, ...userData };
    const updatedUsers = users.map((u) => (u.id === user.id ? updatedUser : u));
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    return updatedUser;
  }

  return;
}