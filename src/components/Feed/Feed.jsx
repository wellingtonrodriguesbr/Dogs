import { useState } from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

export default function Feed() {
  const [photoModal, setPhotoModal] = useState(null);
  return (
    <section>
      {photoModal && <FeedModal photo={photoModal} />}
      <FeedPhotos setPhotoModal={setPhotoModal} />
    </section>
  );
}
