import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // creating states
    this.state = {
      userInfo: {
        name: "",
        id: 0,
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/prashannjeet0206");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <p>Id:{this.state.userInfo.id}</p>
        <p>Name:{this.state.userInfo.name}</p>
      </div>
    );
  }
}

export default Profile;
