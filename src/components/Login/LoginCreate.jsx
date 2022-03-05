import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import useForm from "../../hooks/useForm";
import { userCreate } from "../../services/api";
import Button from "../Forms/Button/Button";
import Input from "../Forms/Input/Input";

export default function LoginCreate() {
  const { userLogin } = -useContext(UserContext);
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  async function createUser(event) {
    event.preventDefault();
    const { url, options } = userCreate({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const response = await fetch(url, options);
    if (response.ok) await userLogin(username.value, password.value);
  }

  return (
    <section className="animatedEntry">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={createUser}>
        <Input label="Usúario" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="username" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button type="submit">Cadastrar</Button>
      </form>
    </section>
  );
}
