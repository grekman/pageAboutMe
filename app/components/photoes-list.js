import React, {Component} from 'react';
import axios from 'axios';
import {Row,Col} from 'react-materialize';


export default class PhotoList extends Component {

state = {
  posts: [],
  loading: true,
  error: null
}
  componentDidMount () {
    axios.get('https://api.unsplash.com/photos/?client_id=2fab425ed804172a761b3650caae0a91ed2bd0a4e1c9e6226303c086292c08d6')
      .then(res => {
        // console.log(res);
        this.setState({
        posts: res.data,
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

console.log('yee: ',posts);
  return (
    <Row className="wraper">
      {posts.map(post =>
      <Col key= {post.id} className="photo-wraper" s={12} l={3} m={4} >
        {/* <div className="photo"> */}
          <img src ={post.urls.thumb} className="one-photo"/>
        {/* </div> */}
        {/* <div className="description">
          <p><b>LANGUAGE: </b>{`     ${post.original_language}`}</p>
          <p><b>TITLE: </b>{`        ${post.original_title}`}</p>
          <p><b>DESCRIPTION: </b> {` ${post.overview}`}</p>
          <p><b>RATING: </b> {`      ${post.vote_average}`}</p>
        </div> */}
      </Col>
      )}
    </Row>
  );
}
  render() {
    console.log(this.state);
    const {loading} = this.state;

    return (
      <div>
        <h1>Some Photoes from Unsplash</h1>
        {loading ? this.renderLoading() : this.renderPosts()}
      </div>
    )
  }
}
