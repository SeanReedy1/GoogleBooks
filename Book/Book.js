import React, {Component} from 'react'

function Book (props) {
    let author, title, thumbnailURL, link;
    if(props.book.volumeInfo) {
         author = props.book.volumeInfo.authors !== undefined ? 
        props.book.volumeInfo.authors :"No Author Listed"
         title=props.book.volumeInfo.title !== undefined ?
        props.book.volumeInfo.title : "No Title Listed"
         thumbnailURL = props.book.volumeInfo.imageLinks.thumbnail !== undefined ?
        props.book.volumeInfo.imageLinks.thumbnail : "No Image Available"
         link=props.book.selfLink!==undefined ? 
        props.book.selfLink : "No link Provided"
    }
    else {
         author=null;
         title=null;
         thumbnailURL=null;
    }
    return(
        <div>
        <img src={thumbnailURL}></img>
        <h2>Author: {author}</h2>
        <h2>Title: {title} </h2>
        <h2> Link: {link} </h2>
        
        </div>
    )
}

export default Book