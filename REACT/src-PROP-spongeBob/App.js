import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import SpongeBobCard from "./components/SpongeBobCard";
// import SquidwardCard from "./components/SquidwardCard";
// import MrKrabsCard from "./components/MrKrabsCard";
import FriendCard from "./components/FriendCard";

import friends from "./friends.json";

const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    <FriendCard
      title={friends[0].title}
      snippet={friends[0].snippet}
      url={friends[0].url}
      image={friends[0].image}
    />
    <FriendCard
      title={friends[1].title}
      snippet={friends[1].snippet}
      url={friends[1].url}
      image={friends[1].image}
    />
    <FriendCard
      title={friends[2].title}
      snippet={friends[2].snippet}
      url={friends[2].url}
      image={friends[2].image}
    />
  </Wrapper>
);

export default App;
