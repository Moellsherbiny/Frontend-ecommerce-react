import type { User, LoginCredentials, SignupCredentials, AuthResponse } from "./authTypes";

export function saveUser(user: User): void {
  const users = getUsers();
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

export function getUsers(): User[] {
  try {
    const data = localStorage.getItem("users");
    return data ? (JSON.parse(data) as User[]) : [];
  } catch (error) {
    console.error("Error reading users from localStorage:", error);
    return [];
  }
}

export function removeUsers(): void {
  localStorage.removeItem("users");
}

export function logoutUser(): void { 
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}


export const setUserLoggedIn = (token: string, user: AuthResponse): void => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = (): User | null => {
  try {
    const data = JSON.parse(localStorage.getItem("user") || "{}");
    const users = getUsers();
    const user = users.find((u) => u.id === data.id)
    if (!user) {
      return null;
    }
    return user
  } catch {
    return null;
  }
};


export async function loginService({
  identifier,
  password,
}: LoginCredentials): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const users = getUsers();
        if (!Array.isArray(users) || users.length === 0) {
          return reject("No registered users found.");
        }

        const user = users.find(
          (u) =>
            (u.email === identifier || u.phone === identifier) &&
            u.password === password
        );

        if (!user) {
          return reject("Invalid email or password");
        }

        setUserLoggedIn(user.token, {
          id: user.id,
          name: user.name,
          email: user.email,
          token: user.token,
        });

        resolve(user);
      } catch (err) {
        reject("Something went wrong while logging in");
      }
    }, 800);
  });
}

export async function signupService({
  name,
  identifier,
  password,
}: SignupCredentials): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = getUsers();
      const existingUser = users.find((u) => u.email === identifier || u.phone === identifier);
      if (existingUser) {
        return reject(new Error("User already exists"));
      }

      const newUser: User = {
        id: Date.now().toString(),
        name,
        email: identifier.includes("@") ? identifier : undefined,
        phone: identifier.includes("@") ? undefined : identifier,
        password,
        token: crypto.randomUUID?.() || "123456-secret-token",
      };

      saveUser(newUser);
      resolve(newUser);
    }, 800);
  });
}
