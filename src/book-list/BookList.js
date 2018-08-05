import React, { Component } from 'react';
import BookListTitle from './BookListTitle';
import AddBook from './AddBook';
import BookShelf from '../common/BookShelf';
import './BookList.css';
import * as BooksAPI from '../BooksAPI';

class BookList extends Component {
    constructor() {
        super();
        this.state = {
            currentlyReading: [],
            wantToRead: [],
            read: []
        }
    }

    types = {
        currentlyReading: 'Currently Reading',
        wantToRead: 'Want to Read',
        read: 'Read'
    };

    componentDidMount() {
        BooksAPI.getAll().then(
            result => {
                let sortedResults = {
                    currentlyReading :[],
                    wantToRead : [],
                    read : []
                };
                result.forEach(book => {
                    for(let key in this.types) {
                        if(book.shelf === key) {
                            sortedResults[key].push(book)
                        }
                    }
                });
                this.setState({
                    currentlyReading: sortedResults.currentlyReading,
                    wantToRead: sortedResults.wantToRead,
                    read: sortedResults.read
                });
            }
        )
    }

    render() {
        const {currentlyReading, wantToRead, read } = this.state;
        return (
            <div className="list-books">
                <BookListTitle/>
                <div className="list-books-content">
                        <BookShelf type={this.types.currentlyReading} books={currentlyReading}/>
                        <BookShelf type={this.types.wantToRead} books={wantToRead}/>
                        <BookShelf type={this.types.read} books={read}/>
                </div>
                <AddBook/>
            </div>
        )
    };
};

export default BookList;