import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import BookList from './book-list/BookList';
import Search from './search-page/Search';

class BooksApp extends React.Component {

  render() {
    return (
        <Router>
          <div className="app">
            <Route path="/" exact={true} component={BookList} />
            <Route path="/search" component={Search} />
          </div>
        </Router>
    )
  }
}

export default BooksApp;
