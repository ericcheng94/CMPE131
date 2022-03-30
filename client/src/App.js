import React from "react";
import "./App.css";
class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      access_token: "",
      DataisLoaded: false,
    };
  }

  // Retrieve access_token
  // componentDidMount() {
  //   fetch("http://127.0.0.1:5000/login", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username: "user1",
  //       password: "admin",
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //       this.setState({
  //         access_token: json,
  //       });
  //     });
  // }

  // GET request
  // componentDidMount() {
  //   console.log(this.access_token);
  //   fetch("http://127.0.0.1:5000/test", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //     });
  // }

  // POST request
  componentDidMount() {
    console.log(this.access_token);
    fetch("http://127.0.0.1:5000/test", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        incoming_value: 555,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, World</h1>
      </div>
    );
  }
}

export default App;
