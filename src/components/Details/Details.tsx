import { Link, useParams } from "react-router-dom";
import "./scrollingtext.css";
import { QueryResponse } from "../../types/propTypes";

interface DetailProps {
    data: QueryResponse;
}

const Details: React.FC<DetailProps> = ({ data }) => {
    const { filmTitle } = useParams();
    const film = data.allFilms.films.find((film) => film.title === filmTitle);

    if (!film) {
        return (
            <div className="container">
                <div className="scrolling-text">
                    <div>
                        <span className="close">
                            <Link to="/">&#10008;</Link>
                        </span>
                    </div>
                    <div>Film not found</div>
                </div>
            </div>
        );
    }

    const release = new Date(film.releaseDate).getFullYear();
    return (
        <div className="container">
            <div className="scrolling-text">
                <div>
                    <span className="close">
                        <Link to="/">&#10008;</Link>
                    </span>
                </div>
                <div>{film.title}</div>
                <div>directed by {film.director}</div>
                <div>in {release}</div>
            </div>
        </div>
    );
};

export default Details;
