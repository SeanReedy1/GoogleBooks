import React, { Component } from 'react';

class Search extends Component {
   constructor (props){
       super(props);
       this.state={
           inputValue: ''
       }
   }
   
    handleChange = (event) => {
    this.setState({inputValue: event.target.value})
   }

    render() {
        return(
            <div>
                <form
                    onSubmit={submitEvent => {
                        submitEvent.preventDefault();
                        this.props.searchQuery(submitEvent, this.state.inputValue)}}>
                        <input 
                            onChange={this.handleChange}
                            value={this.state.inputValue}
                            type="text"
                            placeholder="Enter your book search"
                            name="search"></input>
                            <input type="submit" value="Submit"></input>
                            
                        
                </form>
            </div>
        );
    }
}

export default Search