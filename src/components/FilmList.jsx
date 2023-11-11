// src/components/ProductList.js
import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_FILMS = gql`
  query {
    allFilms {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
    }
  }
`;

function FilmList() {
  const { loading, error, data } = useQuery(GET_FILMS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ul>
        {data.allFilms.films.map((film) => (
          <li key={film.title}>
            <h2>{film.title}</h2>
            <p>Director: {film.director}</p>
            <p>Release Date: {film.releaseDate}</p>
            <ul>
              {film.speciesConnection.species.map((el) => (
                <li key={el.name}>
                  <h3>{el.name}</h3>
                  <p>Classification: {el.classification}</p>
                  <p>
                    Homeworld:{" "}
                    {el.homeworld !== null ? el.homeworld.name : "No homeworld"}
                  </p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilmList;
