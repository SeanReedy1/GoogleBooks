import React, {Component} from 'react'
import Book from '../Book/Book'

function Booklist ({bookResults}) {
    if(!bookResults.items){
    return null}
        const listOfBooks = bookResults.items.map((book, index) =>
    <Book book={book} key={index} /> 
    );

    return (
        <div>
            <ul>
                {listOfBooks}
            </ul>
        </div>
    )
}

export default Booklist