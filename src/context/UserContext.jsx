// src/context/UserContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const userFromStorage = localStorage.getItem("loggedInUser");
    if (userFromStorage) {
      setCurrentUser(JSON.parse(userFromStorage));
    }
  }, []);

  const login = (user) => {
    const fullUser = { ...user, plans: user.plans || [] }; // 🆕 Add default plans if not
    setCurrentUser(fullUser);
    localStorage.setItem("loggedInUser", JSON.stringify(fullUser));
  };
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("loggedInUser");
  };
  const refreshUser = () => {
    const updated = JSON.parse(localStorage.getItem("loggedInUser"));
    setCurrentUser(updated);
  };

  return (
    <UserContext.Provider value={{ currentUser, login, logout, refreshUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
