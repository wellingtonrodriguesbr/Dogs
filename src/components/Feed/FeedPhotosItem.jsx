import styles from "./FeedPhotosItem.module.css";

export default function FeedPhotosItem({ photo, setPhotoModal }) {
  function openModal() {
    setPhotoModal(photo);
  }

  return (
    <li className={styles.photo} onClick={openModal}>
      <img src={photo.src} alt={photo.title} />
      <span>
        {new Intl.NumberFormat("pt-BR", { maximumSignificantDigits: 3 }).format(
          photo.acessos
        )}
      </span>
    </li>
  );
}
