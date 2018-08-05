import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';
import './Book.css';

class Book extends Component {

    joinArray(array) {
        return array.join(", ");
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`}}></div>
                    <BookShelfChanger/>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.joinArray(this.props.book.authors)}</div>
            </div>
        )
    }
}

export default Book;