import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

import useForm from "../../hooks/useForm";

import Button from "../Forms/Button/Button";
import Input from "../Forms/Input/Input";

export default function LoginForm() {
  const { userLogin, error, loading } = useContext(UserContext);
  const username = useForm();
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usúario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Fazer login</Button>
        )}

        {error && <p>{error}</p>}
      </form>
      <Link to="/login/create">Cadastro</Link>
    </section>
  );
}
