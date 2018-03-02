import React from "react";

const style = {
  panelHeading: {
    background: "brown",
    color:"lightBlue"
  }
}
const Panel = () => (
  <div className="panel panel-default">
    <div className="panel-heading" style={style.panelHeading}>Panel heading without title</div>
    <div className="panel-body">
      Aliquip dolore commodo nostrud minim. Cillum do enim non ullamco. Commodo
      magna eu ex mollit sunt amet fugiat. In irure eu enim id ea sit nostrud
      incididunt ad adipisicing.Aliquip dolore commodo nostrud minim. Cillum do
      enim non ullamco. Commodo magna eu ex mollit sunt amet fugiat. In irure eu
      enim id ea sit nostrud incididunt ad adipisicing.
    </div>
  </div>
);

export default Panel;
