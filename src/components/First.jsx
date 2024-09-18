import React from "react";

const name = "sarwat khan";
const CurrentDate = new Date(2024, 1, 2, 16);
const year = CurrentDate.getFullYear();
const CurrentTime = CurrentDate.getHours();

const Custom = {
  color: " ",
};

let greetings;

if (CurrentTime < 12) {
  greetings = "Good-Morning!";
  Custom.color = "Blue";
} else if (CurrentTime < 18) {
  greetings = "Good-AfterNoon!";
  Custom.color = "orange";
} else {
  greetings = "Good-Night!";
  Custom.color = "black";
}

const headingStyle = {
  color: "red",
};

const Border = {
  border: "6px solid pink",
};

const pBorder = {
  border: "6px solid purple",
};

const fBorder = {
  border: "10px solid skyblue",
};
function First() {
  return (
    <div>
      <div style={fBorder}>
        <h1>My Favourite Foods</h1>
        <ul>
          <li>Biryani</li>
          <li>mutton</li>
          <li>burger</li>
        </ul>
      </div>
      <div style={pBorder}>
        <h2> Expression & statement</h2>
        <h3 style={headingStyle}> Expression</h3>
        <p>Created by {name}</p>
        <p>CopyRight {year}</p>
      </div>

      <div style={Border}>
        <h3 style={headingStyle}>Statement</h3>

        <h1 style={Custom}> {greetings}</h1>
      </div>
    </div>
  );
}

export default First;
