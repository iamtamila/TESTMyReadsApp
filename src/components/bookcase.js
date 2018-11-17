import React, {Component} from 'react'
import shelf from "./shelf"
class bookcase extends Component {
    state = {}
    render () {
        return (
            <div className="App">
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <shelf/>
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

export default bookcase;