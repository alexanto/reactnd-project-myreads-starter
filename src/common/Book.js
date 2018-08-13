import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';
import './Book.css';
import placeHolder from '../icons/baseline-book-24px.svg';

class Book extends Component {

    joinArray(array) {
        return array? array.join(", "):'';
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{backgroundImage: this.props.book.imageLinks?`url(${this.props.book.imageLinks.thumbnail})`:`url(${placeHolder})`}}></div>
                    <BookShelfChanger changeShelf={this.props.changeShelf} book={this.props.book}/>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.joinArray(this.props.book.authors)}</div>
            </div>
        )
    }
}

export default Book;