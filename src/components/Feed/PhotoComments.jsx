import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import styles from "./PhotoComments.module.css";
import PhotoCommentsForm from "./PhotoCommentsForm";

export default function PhotoComments({ comments, id }) {
  const [commentsAll, setCommentsAll] = useState(() => comments);
  const { login } = useContext(UserContext);

  return (
    <>
      <ul className={styles.comments}>
        {commentsAll.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={id} setCommentsAll={setCommentsAll} />}
    </>
  );
}
