import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const URL_HOME = "/teams";

class Teams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
      filtered: [],
      keyword: ""
    };
  }

  componentDidMount() {
    fetch(`${URL_HOME}`, { method: "GET" })
      .then(response => response.json())
      .then(json => {
        //console.log(json);
        this.setState({ filtered: json, teams: json });
      });
  }

  searchTeam = event => {
    const keyword = event.target.value;
    if (keyword !== "") {
      const list = this.state.teams.filter(team => {
        return team.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
      });
      this.setState({
        filtered: list,
        keyword
      });
    } else {
      this.setState({
        filtered: this.state.teams,
        keyword
      });
    }
  };

  renderList = ({ filtered }) => {
    return filtered.map(teams => {
      return (
        <CSSTransition classNames="fade" key={teams.id} timeout={500}>
          <Link to={`/team/${teams.name}`} key={teams.id} className="team_item">
            <img alt={teams.name} src={`/images/teams/${teams.logo}`} />
          </Link>
        </CSSTransition>
      );
    });
  };

  render() {
    return (
      <div className="teams_component">
        <div className="teams_input">
          <input
            type="text"
            onChange={e => {
              this.searchTeam(e);
            }}
            value={this.state.keyword}
            placeholder="Search for a team"
          />
        </div>

        <div className="teams_container">
          <TransitionGroup>{this.renderList(this.state)}</TransitionGroup>
        </div>
      </div>
    );
  }
}

export default Teams;
