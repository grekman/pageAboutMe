import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
//Layout
import MainLayout from './components/main-layout';
import SearchLayout from './components/search-layout';
//Pages
import Home from './components/home';
// import MvcList from './components/mvc-list';
import ArticlesList from './components/articles-list';
import PhotoList from './components/photoes-list';
import Contacts from './components/contacts';
// import MovieList from './components/movie-list';
// import BookList from './components/book-list';


export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={Home}>
            </Route>
            {/* <Route path="mvc">
                <Route component={SearchLayout} >
                    <IndexRoute component={MvcList} />
                </Route>
            </Route> */}
            <Route path="articles">
              <Route component={SearchLayout} >
                <IndexRoute component={ArticlesList} />
              </Route>
            </Route>
            <Route path="photoes">
              <Route component={SearchLayout} >
                <IndexRoute component={PhotoList} />
              </Route>
            </Route>
            <Route path="contacts">
                <IndexRoute component={Contacts} />
            </Route>

        </Route>
    </Router>
)
