import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { photoGet } from "../../services/api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import styles from "./FeedModal.module.css";
import PhotoContent from "./PhotoContent";

export default function FeedModal({ photo }) {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = photoGet(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <div className={styles.modal}>
      {error && <Error error={error} />}
      {loading && <Loading error={error} />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}
