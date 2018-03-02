// import React, { Component } from "react";
// import FriendCard from "./components/FriendCard";
// import Wrapper from "./components/Wrapper";
// import friends from "./friends.json";
// import "./App.css";

// class App extends Component {
//   state = {
//     friends
//   }

//   // handleDecrement decreases this.state.count by 1
//   removeFriend = id => {
//     // Filter this.state.friends for friends with an id not equal to the id being removed
//     const friends = this.state.friends.filter(friend => friend.id !== id);
//     // Set this.state.friends equal to the new friends array
//     this.setState({ friends });
//   };

//   render() {
//     // [ Inside `render()` you can set up `const` here before the `return()` function

//     // logic end here ]
//     return (
//     <Wrapper>

//       <h1 className="title">Friends List</h1>
//         {this.state.friends.map(friend => (
//         <FriendCard
//           id={this.state.id}
//           names={this.state.name}
//           image={this.state.image}
//           occupation={this.state.occupation}
//           location={this.state.location}
//           removeFriend={this.removeFriend}
//         />
//         ))}
//     </Wrapper>
//     )
//   }
// };

// export default App;
import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (

      <Wrapper>
        <Title>
          <h1>
            FRIENDS
          </h1>
        </Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
