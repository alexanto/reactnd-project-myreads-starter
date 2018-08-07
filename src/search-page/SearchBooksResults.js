import React, { Component } from 'react';
import './SearchBooksResults.css';
import BookShelf from '../common/BookShelf';

class SearchBooksResults extends Component {
    das = (book, event) => {
        console.log("book1", book);
        console.log("event", event.target.value);
    };
    render() {
        return (
            <div className="search-books-results">
                <BookShelf books={this.props.books} changeShelf={this.props.changeShelf}/>
            </div>
        )
    }
}

export default SearchBooksResults;