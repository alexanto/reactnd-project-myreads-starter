import React, { Component } from 'react';
import BookListTitle from './BookListTitle';
import AddBook from './AddBook';
import BookShelf from '../common/BookShelf';
import './BookList.css';

class BookList extends Component {
    render() {
        return (
            <div className="list-books">
                <BookListTitle/>
                <div className="list-books-content">
                        <BookShelf changeShelf={this.props.changeShelf} type={this.props.types.currentlyReading} books={this.props.books.currentlyReading}/>
                        <BookShelf changeShelf={this.props.changeShelf} type={this.props.types.wantToRead} books={this.props.books.wantToRead}/>
                        <BookShelf changeShelf={this.props.changeShelf} type={this.props.types.read} books={this.props.books.read}/>
                </div>
                <AddBook/>
            </div>
        )
    };
}

export default BookList;