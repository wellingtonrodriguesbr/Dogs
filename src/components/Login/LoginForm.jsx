import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

import useForm from "../../hooks/useForm";

import Button from "../Forms/Button/Button";
import Input from "../Forms/Input/Input";
import Error from "../Helper/Error";

import styles from "../../styles/LoginForm.module.css";
import stylesBtn from "../Forms/Button/Button.module.css";

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
    <section className="animatedEntry">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usúario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Fazer login</Button>
        )}

        <Error error={error} />
      </form>
      <Link className={styles.forgot} to="/login/forgotPassword">
        Esqueceu sua senha?
      </Link>
      <div className={styles.register}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se agora mesmo.</p>
        <Link className={stylesBtn.button} to="/login/create">
          Cadastrar-me
        </Link>
      </div>
    </section>
  );
}
