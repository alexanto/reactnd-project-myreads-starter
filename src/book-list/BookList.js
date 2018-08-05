import React, { Component } from 'react';
import BookListTitle from './BookListTitle';
import AddBook from './AddBook';
import BookShelf from '../common/BookShelf';
import './BookList.css';

class BookList extends Component {

    types = {
        READING: 'Currently Reading',
        WANT_TO_READ: 'Want to Read',
        READ: 'Read'
    };

    render() {
        return (
            <div className="list-books">
                <BookListTitle/>
                <div className="list-books-content">
                        <BookShelf type={this.types.READING} books={[]}/>
                        <BookShelf type={this.types.WANT_TO_READ} books={[]}/>
                        <BookShelf type={this.types.READ} books={[]}/>
                </div>
                <AddBook/>
            </div>
        )
    };
};

export default BookList;