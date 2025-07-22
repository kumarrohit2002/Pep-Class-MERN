import { useEffect } from "react";
import { createContext, useState } from "react";

export const MyContext = createContext();

export default function MyContextProvider({ children }) {
  const [count, setCount] = useState(0);
    const [user, setUser] = useState({ isAuthenticated: false });
    const [appLoading, setAppLoading] = useState(false);

    const getUser = async () => {
      console.log('get user called');
        try {
            setAppLoading(true);
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/users`, {
                method: "GET",
                credentials: "include",
            });

            const result = await response.json();
            const { isSuccess, data } = result;
            if (isSuccess == true) {
                setUser({
                    isAuthenticated: true,
                    ...data.user,
                });
            } else {
                alert("Please login again!");
                window.open("/login");
            }
        } catch (err) {
            console.log(err.message);
            window.open("/login");
        } finally {
            setAppLoading(false);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

  const values = {
    count,
    setCount,
    setUser,
    user,
    appLoading,
    setAppLoading,
    getUser,

  };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
}
