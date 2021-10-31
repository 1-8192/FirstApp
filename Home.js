import React from "react";
import { View, Image } from "react-native";

const Home = props => {
  return (
    <View style={{ flexDirection: "column" }}>
      <Image source={require('./images/gwyn.jpg')}/>
    </View>
  );
};

export default Home;
