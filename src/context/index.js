import React, { createContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [formData, setFormdata] = useState({
    title: "",
    description: "",
  });
  return (
    <GlobalContext.Provider value={{ formData, setFormdata }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
