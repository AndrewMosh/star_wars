import { Link, useParams } from "react-router-dom";
import styles from "./scrollingtext.module.css";

const Details = ({ data }) => {
  const { filmTitle } = useParams();
  const film = data.allFilms.films.find((film) => film.title === filmTitle);
  const release = new Date(film.releaseDate).getFullYear();
  return (
    <div className={styles.container}>
      <div className={styles["scrolling-text"]}>
        <div>
          <span className={styles.close}>
            <Link to="/">&#10008;</Link>
          </span>
        </div>
        <div>{film.title}</div>
        <div> directed by {film.director}</div>

        <div>in {release}</div>
      </div>
    </div>
  );
};
export default Details;
