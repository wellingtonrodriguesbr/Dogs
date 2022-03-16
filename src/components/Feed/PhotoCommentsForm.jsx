import { useState } from "react";
import { ReactComponent as Send } from "../../Assets/enviar.svg";
import useFetch from "../../hooks/useFetch";
import { commentPost } from "../../services/api";
import Error from "../Helper/Error";

export default function PhotoCommentsForm({ id, setCommentsAll }) {
  const { request, error } = useFetch();
  const [comment, setComment] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = commentPost(id, { comment });
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment("");
      setCommentsAll((comments) => [...comments, json]);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Adicionar comentário"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <Send />
      </button>
      <Error error={error} />
    </form>
  );
}
