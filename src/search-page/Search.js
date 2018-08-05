import React, { Component } from 'react';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';

class Search extends Component {
    render() {
        return (
            <div className="search-books">
                <SearchBooksBar/>
                <SearchBooksResults/>
            </div>
        )
    };
};

export default Search;