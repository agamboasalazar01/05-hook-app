import React, { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "strider",
    email: "alex@google.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    //console.log("useEffect se llamó");
  }, []);

  useEffect(() => {
    //console.log("formState changed");
  }, [formState]);

  useEffect(() => {
    //console.log("email changed");
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="example@correo.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "strider2" && <Message />}
    </>
  );
};
