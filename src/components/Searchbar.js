import React, { useState } from "react";

const Searchbar = ({ userinfo }) => {
  const [user, setuser] = useState("");
  return (
    <div style={search}>
      <input
        placeholder="Enter the username......"
        onChange={(e) => setuser(e.target.value)}
        value={user}
        style={input}
      />
      <button onClick={() => userinfo(user)} style={button}>
        Search
      </button>
    </div>
  );
};

const search = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  margin: "20px 0 0 0 ",
};
const button = {
  height: " 30%",
  padding: "10px",
  backgroundColor: "black",
  border: "2px solid black",
  borderRadius: "5px",
  fontSize: "16px",
  color: "#fff",
};
const input = {
  margin: "0 10px 0 0",
  display: "block",
  width: "60%",
  fontSize: "14px",
  padding: "10px",
  borderRadius: "5px",
  border: "2px solid #f0f0f0",
};

export default Searchbar;
