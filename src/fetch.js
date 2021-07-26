import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class Fetch extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  getMovies = async() => {
    const {
      data: {
        data :{ movies }
      }
    } = await (await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"));
    this.setState({movies, isLoading: false});/* movies:movies */ 
  };
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const  { isLoading, movies } = this.state;
    return <div><h1>{this.state.isLoading ? "Loading..." : movies.map(movie => {
      console.log(movie);
      return <Movie id={movie.id} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} year={movie.year} />
    })}</h1></div>;
  }

}

export default Fetch;