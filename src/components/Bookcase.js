import React, { Component } from 'react'
import Shelf from "./Shelf"
class Bookcase extends Component {
    state = {}
    render() {
        return (
            <div className="App">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <Shelf/>
                        </div>
                    </div>
                    <div className="open-search">
                        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bookcase;