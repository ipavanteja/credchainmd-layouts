import { createContext, useState } from "react";

export const DataContext = createContext({
  isSidebarOpen: false,
  setIsSidebarOpen: () => {},
  loading: false,
  setLoading: () => {},
  userName: "",
});

export const DataProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const userName = "Pavan";

  const value = {
    isSidebarOpen,
    setIsSidebarOpen,
    loading,
    setLoading,
    userName,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
