import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Flatlist,
  Image,
  TouchableOpacity
} from "react-native";
import EventTickets from "./EventTicketsDB";

const Tickets = ({ navigation }) => {
  const ticketItem = ({ item }) => {
    return (
      <View style={styles.tickets}>
        <View>
          <Image style={styles.img} />
        </View>
        <View>
          <Text style={styles.ticketTitle}>
            {item.event}
          </Text>
          <Text style={styles.tagLine}>
            {item.tagLine}
          </Text>
          <Text
            style={styles.description}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            (item.description)
          </Text>
          <Text style={styles.tagLine}>
            Price: {item.price}
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Purchase", { ticketID: item.eventID })}
          >
            <Text style={styles.ticketButton}>Buy Ticket</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Flatlist
        data={EventTickets}
        renderItem={ticketItem}
        keyExtractor={item => item.eventID}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15
  },
  tickets: {
    flexDirection: "column"
  },
  img: {
    height: 180,
    width: "100%"
  },
  ticketTitle: {
    fontFamily: "ZenKakuGothicAntique-Light",
    fontWeight: "bold",
    textAlign: "center"
  },
  tagLine: {
    fontFamily: "ZenKakuGothicAntique-Light",
    fontWeight: "600",
    textAlign: "center",
    paddingTop: 5
  },
  description: {
    fontFamily: "ZenKakuGothicAntique-Light",
    fontWeight: "600",
    textAlign: "center",
    padding: 15
  },
  ticketButton: {
    fontFamily: "ZenKakuGothicAntique-Regular",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 15
  }
});

export default Tickets;
