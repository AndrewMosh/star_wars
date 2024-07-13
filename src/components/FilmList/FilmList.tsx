import "./filmlist.css";
import { Link } from "react-router-dom";
import { QueryResponse } from "../../types/propTypes";

interface FilmListProps {
    data: QueryResponse;
}

const FilmList: React.FC<FilmListProps> = ({ data }) => {
    console.log(data);
    return (
        <main>
            <ul>
                {data.allFilms.films.map((film) => (
                    <li key={film.title}>
                        <article>
                            <Link className="link" to={`/${film.title}`}>
                                <div className="backdrop"></div>
                                <span>
                                    <div className="word">
                                        <div>
                                            <span className="gradient-text">{film.title}</span>
                                        </div>
                                    </div>
                                </span>
                            </Link>
                        </article>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default FilmList;
