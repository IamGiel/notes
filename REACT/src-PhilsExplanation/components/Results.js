import React from "react";

const Results = props => {
  return (
  <ul className="list-group">
    {props.results.map(result => {
      return(
      <li className="list-group-item" key={result.id}>
          {result.title}
      </li>)
    })
    }
    </ul>
  )
};

export default Results;
