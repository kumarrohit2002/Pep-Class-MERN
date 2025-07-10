import { createContext, useState } from "react";

export const MyContext = createContext();

export default function MyContextProvider({ children }) {
  const [count, setCount] = useState(0);

  const values = {
    count,
    setCount,
  };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
}
