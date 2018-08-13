import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom';
import BookList from './book-list/BookList';
import Search from './search-page/Search';
import * as BooksAPI from './BooksAPI';
import  NotFound  from './NotFound';

class BooksApp extends React.Component {

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

    updateLibrary = (newBook, updatedResult) => {
        const currentlyInShelves = {
            currentlyReading: [],
            wantToRead: [],
            read: [],
        };

        let temp = [];
        for(let key in updatedResult) {
            temp = temp.concat(this.state[key]);
        }
        for(let key in updatedResult) {
            updatedResult[key].forEach(item => {
                const changedItem = temp.find(book => book.id === item);
                if(changedItem) {
                    changedItem.shelf = key;
                    currentlyInShelves[key].push(changedItem);
                } else {
                    newBook.shelf = key;
                    currentlyInShelves[key].push(newBook);
                }
            });
        }
        this.setState(currentlyInShelves);
    };

    changeShelf = (book, event) => {
        BooksAPI.update(book, event.target.value).then(result => {
            this.updateLibrary(book, result);
        });
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
    return (
        <Router>
          <div className="app">
              <Switch>
                  <Route path="/" exact={true} render={()=><BookList changeShelf={this.changeShelf} books={this.state} types={this.types}/>} />
                  <Route path="/search" render={()=><Search changeShelf={this.changeShelf} library={this.state}/>} />
                  <Route path="*" render={()=><NotFound/> } />
              </Switch>
          </div>
        </Router>
    )
  }
}

export default BooksApp;
