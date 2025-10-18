import type { User, LoginCredentials, SignupCredentials } from "./authTypes";



const STORAGE_KEY = "auth";

export function saveUser(user: User) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function getUser(): User | null {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
}

export function removeUser() {
  localStorage.removeItem(STORAGE_KEY);
}



export async function loginService({
  email,
  password,
}: LoginCredentials): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "raheem" && password === "123") {
        const user: User = {
          id: "1",
          name: "Test User",
          email,
          token: "fake-jwt-token",
        };
        saveUser(user);
        resolve(user);
      } else {
        reject("Invalid email or password");
      }
    }, 800);
  });
}

export async function signupService({name, email,
//   password,
}: SignupCredentials): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user: User = {
        id: Date.now().toString(),
        name,
        email,
        token: "fake-jwt-token",
      };
      saveUser(user);
      resolve(user);
    }, 800);
  });
}
