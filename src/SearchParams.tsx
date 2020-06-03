import React from "react";
import { navigate, RouteComponentProps } from "@reach/router";
import SearchBox from "./SearchBox";

class Search extends React.Component<RouteComponentProps> {
  search() {
    navigate("/");
  }
  render() {
    return (
      <div className="search-route">
        <SearchBox search={this.search} />
      </div>
    );
  }
}

export default Search;
