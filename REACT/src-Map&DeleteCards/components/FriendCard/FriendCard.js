import React from "react";
import "./FriendCard.css";

const FriendCard = props => {
  return(
    <div className="card" onClick={props.removeFriend} key={props.id}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
          <li className="list-group-item">
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Occupation:</strong> {props.occupation}
            </li>
            <li>
              <strong>Address:</strong> {props.location}
            </li>
          </li>
      </ul>
    </div>

  </div>
  )
};

export default FriendCard;
