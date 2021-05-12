import React from 'react'

class SearchBar extends React.Component {
    state = { term: '' };
    
    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render () {
        return (
            <form className="searchBarForm" onSubmit={this.onFormSubmit}>
                <input 
                 className="searchBarInput" 
                 placeholder="Search" 
                 type="text" 
                 value={this.state.term} 
                 onChange={this.onInputChange} 
                />
                <button className="searchButton"><i class="fas fa-search"></i></button>
            </form>            
        )
    }
}

export default SearchBar;