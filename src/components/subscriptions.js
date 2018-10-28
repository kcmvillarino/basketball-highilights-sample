import React, { Component } from "react";

class subscriptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      error: false,
      success: false
    };

    this.onChangeInput = this.onChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  saveSubscription = email => {
    this.setState({
      error: false
    });
    fetch("/subscriptions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    })
      .then(response => response.json())
      .then(() => {
        this.setState({
          email: "",
          success: true
        });
      });
  };

  onChangeInput = event => {
    this.setState({
      email: event.target.value
    });
    //console.log(this.state.email);
  };

  clearMessage = () => {
    // setTimeout(() => {
    //   this.setState({
    //     error: false,
    //     success: false
    //   });
    // }, 3000);

    // usage of bind to settimeout
    setTimeout(
      function() {
        this.setState({
          error: false,
          success: false
        });
      }.bind(this),
      3000
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    let email = this.state.email;
    let regex = /\S+@\S+\.\S+/;

    if (regex.test(email)) {
      this.saveSubscription(email);
      //console.log(email);
    } else {
      this.setState({
        error: true
      });
    }
    this.clearMessage();
  };

  render() {
    return (
      <div className="subscribe_panel">
        <h3>Subscribe to us</h3>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="yourmail.gmail.com"
              value={this.state.email}
              onChange={this.onChangeInput}
            />
            <div className={this.state.error ? "error show" : "error"}>
              Check your email
            </div>
            <div className={this.state.success ? "success show" : "success"}>
              Thank you
            </div>
          </form>
        </div>
        <small>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </small>
      </div>
    );
  }
}

export default subscriptions;
