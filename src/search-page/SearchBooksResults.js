import React, { Component } from 'react';
import './SearchBooksResults.css';
import BookShelf from '../common/BookShelf';

class SearchBooksResults extends Component {
    render() {
        return (
            <div className="search-books-results">
                <BookShelf books={this.props.books} changeShelf={this.props.changeShelf}/>
            </div>
        )
    }
}

export default SearchBooksResults;