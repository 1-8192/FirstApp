import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Menu from "./Menu";

const introText = "this is just nothing";
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1
  },
  textContainer: {
    padding: 20
  },
  logo: {
    height: 100,
    width: 150
  },
  heroImage: {
    height: 170,
    width: "100%"
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
    fontWeight: "300"
  },
  menu: {
    position: "absolute",
    bottom: 10
  }
});

const Home = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./images/gwyn.jpeg")} />
      <Text style={styles.title}>Welcome to my first react native app </Text>
      <Text style={styles.subtitle}>
        {props.userName}
      </Text>
      <Image style={styles.heroImage} source={require("./images/gwyn.jpeg")} />
      <View style={styles.textContainer}>
        <Text style={styles.content}>
          {introText}
        </Text>
      </View>
      <View style={styles.menu}>
        <Menu />
      </View>
    </View>
  );
};

export default Home;
