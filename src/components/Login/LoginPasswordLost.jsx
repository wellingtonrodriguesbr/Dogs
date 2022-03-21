import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import { lostPassword } from "../../services/api";
import Button from "../Forms/Button/Button";
import Input from "../Forms/Input/Input";
import Error from "../Helper/Error";

export default function LoginPasswordLost() {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = lostPassword({
        login: login.value,
        url: window.location.href.replace("lost", "reset"),
      });
      await request(url, options);
    }
  }

  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="E-mail / Usúario" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar e-mail</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
}
