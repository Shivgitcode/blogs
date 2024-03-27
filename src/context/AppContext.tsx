import { createContext, useContext, useState } from "react";

interface ValueProp {
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<ValueProp | undefined>(undefined);

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [login, setLogin] = useState(true);

  const value = {
    login,
    setLogin,
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
