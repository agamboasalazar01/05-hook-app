import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>LoginPage</h1>
      <br />
      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({
            id: 456,
            name: "GianCarlos Gamboa",
            email: "giancarlos@google.com",
          })
        }
      >
        Establecer Usuario
      </button>
    </>
  );
};
