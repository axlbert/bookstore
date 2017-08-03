import React, { Component } from 'react';
import BookItem from './bookitem'
import {Link} from 'react-router-dom'


/* this is a controlled component where react controls the state of the component */

// if we just render, we could also just build a function and pass in props func(props)



const shelves = ["currentlyReading","wantToRead","read"]

class ShelfList extends Component {
/* when refactoring from function to class, we need to include this. before props and add render() instead of just return */

    render() {
    /* further below this.props.books list has been replaced by showingBooks since this is the filtered list */
    	return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Books</h1>
          </div>
        {
          shelves.map(element => 
              {
                return(

                  <div className="list-books-content" key={element}>

                  <div className="bookshelf">
                    <h2 className="bookshelf-title">{element}</h2>
                      <div  key="booklist-books"  className="bookshelf-books">
                        <ol  key="booklist-grid" className="books-grid">
                        

                      {this.props.showingBooks.filter(el => el.shelf === element)
                        .map((book) => (
                                     <BookItem key={book.id + book.title}
                                      
                                      book={book}
                                      
                                      handleListChange={this.props.handleListChange}
                                      onDeleteBook={this.props.onDeleteBook}
                                      />
                                  )
                              )}
                       
                        </ol>
                      </div>
                      </div>
                  </div>
                )
              }
          )
        }
        <Link className="open-search" to="/search">Add a book</Link>
      </div>
      )
  }}



export default ShelfList