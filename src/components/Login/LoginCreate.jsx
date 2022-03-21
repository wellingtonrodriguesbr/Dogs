import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import { userCreate } from "../../services/api";
import Button from "../Forms/Button/Button";
import Input from "../Forms/Input/Input";
import Error from "../Helper/Error";
import Head from "../Helper/Head";

export default function LoginCreate() {
  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

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
    const { response } = await request(url, options);
    if (response.ok) await userLogin(username.value, password.value);
  }

  return (
    <section className="animatedEntry">
      <Head title="Cadastro" />
      <Link to="/login">← Voltar</Link>
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={createUser}>
        <Input label="Usúario" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="username" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled type="submit">
            Cadastrando ...
          </Button>
        ) : (
          <Button type="submit">Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
}
