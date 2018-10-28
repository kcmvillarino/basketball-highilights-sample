import React, { Component } from "react";

const URL_TEAM = "http://localhost:3001/teams";

class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(`${URL_TEAM}?name=${this.props.match.params.id}`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ data: json });
      });
  }

  renderData = ({ data }) => {
    return data.map(item => {
      return (
        <div key={item.id} className="team_data_wrapper">
          <div className="left">
            <img alt={item.name} src={`/images/teams/${item.logo}`} />
          </div>
          <div className="right">
            <h1>{item.name}</h1>
          </div>
        </div>
      );
    });
  };

  render() {
    return <div className="team_data">{this.renderData(this.state)}</div>;
  }
}

export default Team;
