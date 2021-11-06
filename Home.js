import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const introText = "this is just nothing";
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    padding: 20
  },
  textContainer: {
    textAlign: "center",
    paddingTop: 10
  },
  logo: {
    height: 100,
    width: 150
  },
  title: {
    fontFamily: "ZenKakuGothicAntique-Regular"
  },
  subtitle: {
    paddingTop: 5,
    fontFamily: "ZenKakuGothicAntique-Regular"
  },
  content: {
    fontFamily: "ZenKakuGotchicAntique-Light",
    fintWeight: "300"
  },
});

const Home = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./images/gwyn.jpeg")} />
      <Text style={styles.title}>Welcome to my first react native app </Text>
      <Text style={styles.subtitle}>
        {props.userName}
      </Text>
      <View style={styles.textContainer}>
        <Text style={styles.content}>
          {introText}
        </Text>
      </View>
    </View>
  );
};

export default Home;
