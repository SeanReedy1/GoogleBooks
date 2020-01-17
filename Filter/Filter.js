import React, {Component} from 'react'

function Filter () {
    
    return( <div>
        <label> Book Type: </label>
        <form
        onChange={e => this.props.handleBookType(e.target.value) }>
        
        <select 
                    name="book-type-filter">
                    <option 
                        value="ebooks">
                            All eBooks
                    </option>
                    <option 
                        value="free-ebooks">
                        Free eBooks
                    </option>
                    <option 
                        value="paid-ebooks">
                        Paid eBooks
                        </option>
                    <option 
                        value="full">
                        Fully Available eBooks
                    </option>
                    <option 
                        value="partial">
                        Partially Available eBooks
                    </option>
                </select>
                </form>
                </div>)
}

export default Filter