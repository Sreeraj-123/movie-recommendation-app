import '../css/Favorites.css';
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

function Favourites() {
    const{favourites}=useMovieContext();
    if(favourites.length>0){
        return (
        <div className="favourites">
            <h2>Your Favourites</h2>
            <div className="movies-grid">
                {favourites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )}
    else{
        return <div className="favorites-empty">
            <h2>Your favourites list is empty</h2>
            <p>Add movies to your favourites to see them here.</p>
        </div> 
    }
}

export default Favourites;