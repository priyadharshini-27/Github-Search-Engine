import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";

class App extends Component {
  state={
    users:[],
    loading:false
  }

  async componentDidMount() {
    //runs when comp mounts
    this.setState({loading:true});

    const res = await axios.get("https://api.github.com/users");
  
    this.setState({users:res.data,loading:false})
    console.log(res.data);
    //console.log("123");
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Users loading={this.state.loading} users={this.state.users}/>
      </div>
    );
  }
}

export default App;
