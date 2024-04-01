import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

interface ValueProp {
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  isLoggedIn: string;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<ValueProp | undefined>(undefined);

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [login, setLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get("jwt"));
  useEffect(() => {
    setIsLoggedIn(isLoggedIn);
  });

  const value = {
    login,
    setLogin,
    isLoggedIn,
    setIsLoggedIn,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context) {
    return context;
  } else {
    throw new Error("context undefined");
  }
};
