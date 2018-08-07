import React, { Component } from 'react';
import './BookShelfChanger.css';

class BookShelfChanger extends Component {

    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={(event) => this.props.changeShelf(this.props.book, event)}>
                    <option value="move" disabled>Move to...</option>
                    <option selected={this.props.book.shelf === 'currentlyReading'} value="currentlyReading">Currently Reading</option>
                    <option selected={this.props.book.shelf === 'wantToRead'} value="wantToRead">Want to Read</option>
                    <option selected={this.props.book.shelf === 'read'} value="read">Read</option>
                    <option selected={!this.props.book.shelf} value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookShelfChanger;