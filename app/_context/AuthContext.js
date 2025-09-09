"use client";
import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    const token = Cookies.get("token");
    const name = Cookies.get("name");
    const userId = Cookies.get("userId");
    if (token && name && userId) {
      setUser({ token, name, userId });
    }
  }, []);

  const login = (data) => {
    Cookies.set("token", data.token, { expires: 7 });
    Cookies.set("name", data.name, { expires: 7 });
    Cookies.set("userId", data.userId, { expires: 7 });
    setUser(data);
  };

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("name");
    Cookies.remove("userId");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
