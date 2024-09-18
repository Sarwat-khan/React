import React from "react";
import "./diary.css";


function Diary(props){
    return(
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}


export default Diary;