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

    mergeWithLibrary(currentLibrary, searchResults) {
        return searchResults.map(result => {
           const matchingItemInLibrary = currentLibrary.find(item => item.id === result.id);
           if(matchingItemInLibrary) {
                result['shelf'] = matchingItemInLibrary.shelf;
           }
           return result;
        });
    }

    handleSearch = (query) => {
        this.setState({
            query: query
        });
        let booksArray = [];
        Object.keys(this.props.library).map((key) => {
            return booksArray = booksArray.concat(this.props.library[key]);
        });
        BooksAPI.search(query).then(result => {
            this.setState({
                searchResults: this.mergeWithLibrary(booksArray, result)
            });
        })
    };

    render() {
        return (
            <div className="search-books">
                <SearchBooksBar handleSearch={this.handleSearch}/>
                <SearchBooksResults changeShelf={this.props.changeShelf} books={this.state.searchResults}/>
            </div>
        )
    };
}

export default Search;