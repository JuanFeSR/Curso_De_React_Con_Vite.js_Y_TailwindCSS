import { createContext, useContext, useMemo } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const value = useMemo(() => {
    "value";
  });

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export const useStoreContext = () => {
  const useStoreContext = useContext(StoreContext);
  if (!useStoreContext) {
    throw new Error("useStoreContext error");
  }
  return useStoreContext;
};
