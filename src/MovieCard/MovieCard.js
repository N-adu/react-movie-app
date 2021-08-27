import Tag from "../Tag/tag";
import './MovieCard.css'
function MovieCard({genre,title,poster}) {
    return(
        <div className="movie-card">
            <div className="overlay"></div>
            <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${poster}`} alt="poster"/>
            <div className="movie-info">
                <Tag genre={genre}/>
                <h2>{title}</h2>
            </div>
            
        </div>
        
    )
}

export default MovieCard;