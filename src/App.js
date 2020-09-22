import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Users from "./components/Users";

function App() {
  const [data, setdata] = useState("");
  const userName = (user) => {
    setdata(user);
  };
  return (
    <div className="App">
      <Navbar />
      <Searchbar userinfo={userName} />
      <Users data={data} />
    </div>
  );
}

export default App;
