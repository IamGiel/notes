import React from "react";
import "./Wrapper.css";

const Wrapper = props => 
    
    <div className="wrapper">{props.children}</div>;
// `children` only means its containing `stuff` inside the `Wrapper` element
// to see what stuff - check `App.js` to view what `props.children` represent inside`<Wrapper>`
export default Wrapper;
