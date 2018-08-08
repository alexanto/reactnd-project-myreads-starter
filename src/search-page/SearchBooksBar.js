import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SearchBooksBar.css';

class SearchBooksBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : ''
        }
    }

    onChange = (event) => {
        const val = event.target.value;
        this.setState({
           value: val
        });

    };
    onSubmit = (e) => {
        if(e.keyCode === 13) {
            this.props.handleSearch(this.state.value);
        }
    };

    render() {
        return (
            <div className="search-books-bar">
                <Link className="close-search" to="/">Search</Link>
                <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={this.onChange} onKeyDown={this.onSubmit}/>
                </div>
            </div>
        )
    }
}

export default SearchBooksBar;