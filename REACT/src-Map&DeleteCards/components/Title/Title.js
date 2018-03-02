import React from "react";
// import "./Title.css";

const Title = props =>
    <div className="container text-center">{props.children}</div>;
// `children` only means its containing `stuff` inside the `Title` element
// to see what stuff - check `App.js` to view what `props.children` represent inside`<Title>`
export default Title;
