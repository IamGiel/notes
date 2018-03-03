import React, { Component } from "react";
import Search from "./Search";
import Results from "./Results";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchGiphy("Obama");
  }

  searchGiphy = query => {
    API.search(query)
      .then(res => {
        this.setState({ results: res });
        console.log(this.state.results, "test");
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGiphy(this.state.search);
  };

  render() {
    return (
      <div>
        <Search
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;

// 1. componentDidMount calls API search query
// 2. Search Query - Queries the API - returns an array of objects
// 3. Pass the objects to the state
// 4. pass the state update the state and
// 5. pass the state as a prop in the result component (line 48)
// 6. Inside the prop were mapping through the (prop.result) to the array of object
// 7. which is why it is being rendered to the browser
