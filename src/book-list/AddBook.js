import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddBook.css';

class AddBook extends Component {
    render() {
        return (
            <div className="open-search">
                <Link class="search" to="/search">Add a book</Link>
            </div>
        )
    }
}

export default AddBook;