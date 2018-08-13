import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SearchBooksBar.css';
import { DebounceInput } from 'react-debounce-input';

class SearchBooksBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : ''
        }
    }

    componentDidMount() {
        console.log('thisstate', this.state);
        this.setState({
            value: ''
        });
    }

    onChange = (event) => {
        const val = event.target.value;
        this.setState({
           value: val
        });
        this.props.handleSearch(val);

    };

    render() {
        return (
            <div className="search-books-bar">
                <Link className="close-search" to="/">Search</Link>
                <div className="search-books-input-wrapper">
                <DebounceInput debounceTimeout={300} type="text" placeholder="Search by title or author" onChange={this.onChange}/>
                </div>
            </div>
        )
    }
}

export default SearchBooksBar;