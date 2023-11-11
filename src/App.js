// src/App.js
import React from "react";
import FilmList from "./components/FilmList/FilmList";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./components/Details/Details";
import { useQuery, gql } from "@apollo/client";
import Background from "./components/Background/Background";
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
function App() {
  const { loading, error, data } = useQuery(GET_FILMS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <Background />
      <Header />
      <Router>
        <Routes>
          <Route path="/star_wars" element={<FilmList data={data} />} />
        </Routes>
        <Routes>
          <Route path="/:filmTitle" element={<Details data={data} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
