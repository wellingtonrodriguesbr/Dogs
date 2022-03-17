import useFetch from "../../hooks/useFetch";
import { photoDelete } from "../../services/api";
import styles from "./PhotoDelete.module.css";

export default function PhotoDelete({ id }) {
  const { loading, request } = useFetch();

  async function handleDelete() {
    const confirm = window.confirm("Tem certeza que deseja cancelar?");
    if (confirm) {
      const { url, options } = photoDelete(id);
      const { response } = await request(url, options);
      if (response.ok) {
        window.location.reload();
      }
    }
  }

  return (
    <>
      {loading ? (
        <button disabled onClick={handleDelete} className={styles.delete}>
          deletando ...
        </button>
      ) : (
        <button onClick={handleDelete} className={styles.delete}>
          deletar
        </button>
      )}
    </>
  );
}
