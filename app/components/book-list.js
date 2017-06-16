import React, {Component} from 'react';
import axios from 'axios';


export default class BookList extends Component {

state = {
  posts: [],
  loading: true,
  error: null
}
  componentDidMount () {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=Harry&key=AIzaSyBePLyAh_6xb52I4arq-s8FVCkFRgLeu1g')
      .then(res => {
        // console.log(res);
        this.setState({
        posts: res.data.items,
        loading: false,
        error: null
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: err
        });
      });


 }
renderLoading() {
  return (
    <div>Loading..</div>
  )}

renderError() {
  return (
    <div>Something went wrong {this.state.error.message} </div>
  );
}

renderPosts() {
  const {error, posts} = this.state;

  if(error) {
    return this.renderError;
  }

// console.log(posts);
  return (
    <ul className="wraper">
      {posts.map(post =>
      <li key= {post.id} className="movie-wraper">
        <div className="poster">
          <img src ={ `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${post.poster_path}`}/>
        </div>
        <div className="description">
          <p><b>TITLE: </b>{`        ${post.volumeInfo.title}`}</p>
          <p><b>DESCRIPTION: </b> {` ${post.volumeInfo.description}`}</p>
          <p><b>PRICE: </b> {`      ${post.saleInfo.listPrice.amount}`}</p>
        </div>
      </li>
      )}
    </ul>
  );
}
  render() {
    console.log(this.state);
    const {loading} = this.state;

    return (
      <div>
        <h1>Popular Movies</h1>
        {loading ? this.renderLoading() : this.renderPosts()}
      </div>
    )
  }
}
