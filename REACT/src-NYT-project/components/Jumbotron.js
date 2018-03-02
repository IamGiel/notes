import React from "react";

const style = {
  titleHead: {
    fontFamily: "Lobster, cursive",
    background: "lightBlue",
    color: "brown"
  },
  titleParagraph: {
    fontFamily: "Lobster, cursive",
    color: "black"
  }
}
const Jumbotron = () => (
  <div className="jumbotron" style={style.titleHead}>
    <h1>NYT APPLICATION</h1>

    <p style={style.titleParagraph}>
      Enim adipisicing enim reprehenderit ex ullamco consectetur Lorem laboris
      magna exercitation. Aliquip reprehenderit magna elit cillum adipisicing
      dolore aliquip velit. Ipsum ullamco nostrud tempor eu deserunt ipsum
      incididunt fugiat esse ipsum. Exercitation nostrud exercitation sit ex
      nostrud aliqua officia magna nostrud deserunt et esse eu deserunt. Non
      dolor consequat qui ea culpa tempor magna nulla consectetur est occaecat.
    </p>
  </div>
);

export default Jumbotron;
