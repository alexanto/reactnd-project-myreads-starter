import React, { Component } from 'react';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';
import * as BooksAPI from '../BooksAPI';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            searchResults: [],
            library: {

            }
        }
    }

    componentDidMount() {
        /** querying the books again is necessary to ensure correct data even if user starts from search page
         * and passing it from the BookList component is not possible
         * querying the books logically belongs to the BookList component not the App component
         * querying the books in the app and passing all the way down is not good architecture I think
         */
        BooksAPI.getAll().then(
            result => {
                this.setState({
                    library: result
                });
            }
        )
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
        BooksAPI.search(query).then(result => {
            this.setState({
                searchResults: this.mergeWithLibrary(this.state.library, result)
            });
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