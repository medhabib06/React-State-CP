import React from "react";
import "./App.css";
import Profile from "./Profile";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isToggleOn: true,
    };
  }

  handleClick() {
    this.setState({ isToggleOn: !this.state.isToggleOn });
  }

  render() {
    return (
      <div className={"App"}>
        {this.state.isToggleOn ? (
          <button onClick={this.handleClick.bind(this)}>OFF</button>
        ) : (
          <button onClick={this.handleClick.bind(this)}>ON</button>
        )}

        {this.state.isToggleOn ? <Profile/> : null}
      </div>
    );
  }
}


export default App;
