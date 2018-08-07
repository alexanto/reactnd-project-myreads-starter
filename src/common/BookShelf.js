import React, { Component } from 'react';
import Book from './Book';
import './BookShelf.css'

class BookShelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                {this.props.type && this.props.type.length > 0 &&
                <h2 className="bookshelf-title">{this.props.type}</h2>
                }
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map(book => {
                            return (
                                    <li key={book.id}>
                                        <Book changeShelf={this.props.changeShelf} book={book}/>
                                    </li>
                                )

                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;