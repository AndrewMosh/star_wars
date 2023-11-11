// src/components/ProductList.js
import React from "react";
import styles from "./filmlist.module.css";
import { Link } from "react-router-dom";

function FilmList({ data }) {
  return (
    <main>
      <ul>
        {data.allFilms.films.map((film) => (
          <li key={film.title}>
            <article>
              <Link className={styles.link} to={`/${film.title}`}>
                <div className={styles.backdrop}></div>
                <span>
                  <span className={styles.word}>
                    <span className={styles.subword}>{film.title}</span>
                  </span>
                </span>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default FilmList;
