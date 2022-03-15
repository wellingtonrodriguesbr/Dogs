import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { photosGet } from "../../services/api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import styles from "./FeedPhotos.module.css";
import FeedPhotosItem from "./FeedPhotosItem";

export default function FeedPhotos({ setPhotoModal }) {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = photosGet({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
    }

    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animatedEntry`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setPhotoModal={setPhotoModal}
          />
        ))}
      </ul>
    );
  else return null;
}
