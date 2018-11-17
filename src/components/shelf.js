import React, {Component} from 'react'
import book from "./book"
class shelf extends Component {
    state = {}
    render () {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <book/>
                    </ol>
                </div>
            </div>    
        )
    }
}

export default book;