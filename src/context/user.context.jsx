/* eslint-disable react/prop-types */
import { useState, createContext, useEffect } from "react";
import {
  onAuthStateListener,
  CreateUserDoc,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateListener((user) => {
      console.log(user);
      if (user) {
        CreateUserDoc(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
