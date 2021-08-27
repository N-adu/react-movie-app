import Tag from '../Tag/tag.js';
import './TvCard.css'

function TvCard ({title,rating,poster,genre}) {
    return (
<div className="tv-card">
    <div className="overlay"></div>
    <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${poster}`} alt="poster"/>
    <h3>{genre}</h3>
    <div className="tv-info">
        <Tag genre={genre}/>
        <h2>{title}</h2>
    </div>
</div>

    )
}


export default TvCard;