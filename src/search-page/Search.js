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
        if(searchResults.length > 0) {
            return searchResults.map(result => {
                const matchingItemInLibrary = currentLibrary.find(item => item.id === result.id);
                if(matchingItemInLibrary) {
                    result['shelf'] = matchingItemInLibrary.shelf;
                }
                return result;
            });
        } else {
            return [];
        }
    }

    handleSearch = (query) => {
        this.setState({
            query: query
        });
        let booksArray = [];
        Object.keys(this.props.library).map((key) => {
            return booksArray = booksArray.concat(this.props.library[key]);
        });
        if(query) {
            BooksAPI.search(query).then(result => {
                this.setState({
                    searchResults: this.mergeWithLibrary(booksArray, result)
                });
            }).catch(() => {
                this.setState({
                    searchResults: []
                });
            })
        } else {
            this.setState({
                searchResults: []
            });
        }

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