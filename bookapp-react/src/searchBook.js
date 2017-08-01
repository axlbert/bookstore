import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './App.css'


/* not pursued further since that endpoint is not available on the API */
class SearchBook extends Component {

	
 	/* use inside html/jsx section to display query :  {JSON.stringify(this.state)} */
	render() {

		return (
			<div className="search-books">
			<div className="search-books-bar">
			
      		<input className="search-books-input-wrapper" type="text"
      		placeholder="Search by title or author"
      		value={this.props.query}
      		onChange={(event) => this.props.updateQuery(event.target.value)}
			/>


      	
      	<Link className="close-search" to="/">back</Link>
      	</div>
      	<ShelfList books={this.props.searchResults} showingBooks={this.props.showingBooks} handleListChange={this.props.handleListChange} onDeleteBook={this.props.onDeleteBook}/>
      	</div>
			)
	}
}

export default SearchBook