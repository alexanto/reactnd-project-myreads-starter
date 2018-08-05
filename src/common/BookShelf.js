import React, { Component } from 'react';
import Book from './Book';
import './BookShelf.css'

class BookShelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.type}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            <Book/>
                        </li>
                        <li>
                            <Book/>
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;