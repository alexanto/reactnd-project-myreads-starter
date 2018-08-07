import React, { Component } from 'react';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';
import * as BooksAPI from '../BooksAPI';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            searchResults: []
        }
    }

    handleSearch = (query) => {
        this.setState({
            query: query
        });
        BooksAPI.search(query).then(result => {
            this.setState({
                searchResults: result
            })
        })
    };

    render() {
        return (
            <div className="search-books">
                <SearchBooksBar handleSearch={this.handleSearch}/>
                <SearchBooksResults books={this.state.searchResults}/>
            </div>
        )
    };
}

export default Search;