import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { photoGet } from "../../services/api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import styles from "./FeedModal.module.css";
import PhotoContent from "./PhotoContent";

export default function FeedModal({ photo, setPhotoModal }) {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = photoGet(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setPhotoModal(null);
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading error={error} />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}
