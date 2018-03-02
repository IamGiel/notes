import React from "react";
import "./FriendCard.css";

const FriendCard = (props) => (
  <div className="card">
    <div className="img-container">
      <img
        alt={props.title}
				src={props.image}
      />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.title}
        </li>
        <li>
          <strong>Occupation:</strong> {props.snippet}
        </li>
        <li>
          <strong>Location:</strong> {props.uri}
        </li>
      </ul>
    </div>
  </div>
);

export default FriendCard;
