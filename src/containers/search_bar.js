import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchMovieInfo } from "../actions/index";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import MovieList from "./movie_list";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchMovieInfo(this.state.term);
    this.setState({ term: "" });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Enter the movie name"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovieInfo }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
