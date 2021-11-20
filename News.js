import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Flatlist,
  Image
} from "react-native";

const News = () => {
  const [isLoaded, setDataLoad] = useState(true);
  const [storyData, setStoryData] = useState();

  const getNews = async () => {
    try {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/albums/1/photos"
      );
      let stories = await response.json();
      setStoryData(stories);
      setDataLoad(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  console.log(storyData);

  const newsItem = item => {
    return (
      <View style={styles.storylist}>
        <Image style={styles.thumb} source={{ uri: item.url }} />
        <Text style={styles.storyText}>
          {item.title}
        </Text>
        <Text style={styles.storyText}>
          {item.url}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isLoaded
        ? <ActivityIndicator />
        : <Flatlist
            data={storyData}
            renderItem={newsItem}
            keyExtractor={item => item.title}
          />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  storylist: {
    paddingBottom: 20
  },
  thumb: {
    height: 100,
    width: "100%"
  },
  storyText: {
    padding: 10
  }
});

export default News;
