import React, { Component } from 'react';
import './App.css';
import Booklist from './Booklist/Booklist'
import Search from './Search/Search'
import Filter from './Filter/Filter'


class App extends Component {
  state={
    searchResults: '',
    searchTerm: '',
    bookFilter:''
  }

  getSearch = (searchSubmitEvent, searchInput) => {
    searchSubmitEvent.preventDefault();
    this.setState(
      {
        searchTerm: searchInput
      }
    )
    const startURL = 'https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes'
    const key = 'AIzaSyDGcSPNITPtYODM_B7_PKyjYqTNbboLkr8'
    console.log(searchInput);
    const finalURL=this.formatUrl(startURL, searchInput, key);
    fetch(finalURL)
    .then(response => {
      if(!response.ok) {
        throw new Error('Something went wrong, please try again later');
      }
      return response;
    })
    .then(response => response.json())
    .then(bookResultsObj => {
      this.setState({
        searchResults:bookResultsObj
      })
    })
  }
  
  formatUrl = (baseURL, searchTerm, key) => {
    let userQuery;
    if(searchTerm!=='') {
      userQuery='?q=' + searchTerm;
    }
    if(this.state.bookFilter!=='') {
      userQuery= userQuery + '&filter'+ this.state.bookFilter;
    }
    let endURL;
    endURL = baseURL+userQuery+'&key=' + key;
    return endURL
  }

  handleBookType = (bookTypeInput) => {
    if(bookTypeInput) {
      this.setState({
        bookFilter:bookTypeInput
      })
    }
  }
  
  
  render(){
  
  return (
    <div className="App">
      <Search searchQuery={this.getSearch} searchTerm={this.state.searchTerm} />
      <Filter handleBookType={this.handleBookType} />
      <Booklist bookResults={this.state.searchResults} />
    </div>
  );
}}

export default App;
