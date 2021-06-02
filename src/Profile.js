import React from "react";
import eng from './engineer.jpg'

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Mohamed Habib Boughanmi",
      profession: "Mechatronics engineer",
      bio: 'Experienced, organized Engineer with a background in project management as well as training in Web development.',
      count: 0,
      interval:0,
    };
  }

  componentDidMount() {
    console.log("didmount");
    this.interval = setInterval(this.timer, 1000);
    
  }

  componentDidUpdate() {
    console.log("componentdidupdate");
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log("componentWillUnmount");
    alert("the Profile has been deleted");
  }

  timer = () => {
    this.setState({ count: this.state.count + 1 });
  };



  render() {
    console.log("render");
    return (
      <div>
        <h1>{this.state.count}</h1>
        <h2>{this.state.fullName}</h2>
        <h2>{this.state.profession}</h2>
        <h2>{this.state.bio}</h2>
        <img src={eng} alt="engineer"/>
      </div>
    );
  }

}
export default Profile;
