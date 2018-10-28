import React, { Component } from "react";

// Components
import Featured from "./featured";
import Subscriptions from "./subscriptions";
import Blocks from "./blocks";
import Poll from "./Poll";

const URL_HOME = "/home";

class home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      home: "",
      blocks: ""
    };
  }

  componentDidMount() {
    fetch(URL_HOME, { method: "GET" })
      .then(response => response.json())
      .then(json => this.setState({ home: json }));
  }

  render() {
    return (
      <div>
        <Featured slides={this.state.home.slider} />
        <Subscriptions />
        <Blocks blocks={this.state.home.blocks} />
        <Poll />
      </div>
    );
  }
}

export default home;
