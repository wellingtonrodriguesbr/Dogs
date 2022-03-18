import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

export default function Feed({ user }) {
  const [photoModal, setPhotoModal] = useState(null);
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);

  function infiniteScroll() {
    let wait = false;

    if (infinite) {
      const scroll = window.screenY;
      const height = document.body.offsetHeight - window.innerHeight;

      if (scroll > height * 0.75 && !wait) {
        setPages((pages) => [...pages, pages.length + 1]);
        wait = true;
        setTimeout(() => {
          wait = false;
        }, 500);
      }
    }
  }

  useEffect(() => {
    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite]);

  return (
    <section>
      {photoModal && (
        <FeedModal photo={photoModal} setPhotoModal={setPhotoModal} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          user={user}
          page={page}
          setPhotoModal={setPhotoModal}
          setInfinite={setInfinite}
        />
      ))}
      {!infinite && !user && (
        <p style={{ padding: "4rem 0", textAlign: "center", color: "#888" }}>
          Não existem mais postagens.
        </p>
      )}
    </section>
  );
}

Feed.defaultProps = {
  user: 0,
};

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};
