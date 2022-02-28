import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import useForm from "../../hooks/useForm";
import { tokenPost, userGet } from "../../services/api";

import Button from "../Forms/Button/Button";
import Input from "../Forms/Input/Input";

export default function LoginForm() {
  const userName = useForm();
  const password = useForm();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      getUser(token);
    }
  }, []);

  async function getUser(token) {
    const { url, options } = userGet(token);
    const response = await fetch(url, options);
    const json = await response.json();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (userName.validate() && password.validate()) {
      const { url, options } = tokenPost({
        userName: userName.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem("token", json.token);
      getUser(json.token);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usúario" type="text" name="userName" {...userName} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Fazer login</Button>
      </form>
      <Link to="/login/create">Cadastro</Link>
    </section>
  );
}
