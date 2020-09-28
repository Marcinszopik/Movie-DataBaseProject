import React from "react";
import "./styles.css";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      movies: [],
    };
  }

makeApiCall = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=abaeae31ed3533178d4c9e0e5b33a4c6&language=en-US&query=terminator&page=1&include_adult=false`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          this.setState({
            isLoaded: true,
            movies: jsonifiedResponse.results
          });
        })
        .catch((error) => {
          this.setState({
            isLoaded: true,
            error
          });
        });
    
  }

  
  componentDidMount() {
    this.makeApiCall()
  }

  render() {
    const { error, isLoaded, movies } = this.state;
    console.log(movies)
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (!isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>Movie</h1>
          <ul>
            {movies.map((movie, index) =>
              <li key={index}>
                <img className="photo" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie path" />
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
              </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
  }
  }


export default Movies;
