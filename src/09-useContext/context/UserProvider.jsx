import React, { useState } from "react";
import { UserContext } from "./UserContext";

// const user = {
//   id: 123,
//   name: "Alexander Gamboa",
//   email: "alex@google.com",
// };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    /* <UserContext.Provider value={{ hola: "Mundo", user: user }}></UserContext.Provider> */
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
