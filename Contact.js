import React, { useState } from "react";
import { Button, Text, TextInput, View, StyleSheet, Alert } from "react-native";

const Contact = ({ navigation }) => {
  const [formName, setFormName] = useState("Enter Name");
  const [formEmail, setFormEmail] = useState("Enter Email");
  const [phoneNumber, setPhoneNumber] = useState("Enter phone number");
  const [formMessage, setFormMessage] = useState("What is on your mind");

  const submit = () => {
    if (!formName || !formEmail || !formMessage) {
      Alert.alert("Please fill out all required fields");
    } else {
      Alert.alert(`Thank you, ${formName}`);
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.form}>
      <Text style={styles.labels}>Name: *required</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={name => setFormName(name)}
        value={formName}
        autoCapitalize="words"
        selectTextOnFocus={true}
      />
      <Text style={styles.labels}>Email: *required</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={email => setFormEmail(email)}
        value={formEmail}
        autoCapitalize="words"
        selectTextOnFocus={true}
      />
      <Text style={styles.labels}>Phone Number:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
        value={phoneNumber}
        autoCapitalize="words"
        selectTextOnFocus={true}
      />
      <Text style={styles.labels}>Message: *required</Text>
      <TextInput
        style={styles.multiTextInput}
        onChangeText={formMessage => setFormMessage(formMessage)}
        value={formMessage}
        multiline={true}
        numberOfLines={3}
        selectTextOnFocus={true}
      />
      <Button title="Contact Us" color="#708090" onPress={submit} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    alignItems: "center",
    flexDirection: "column",
    padding: 18
  },
  textInput: {
    borderWidth: 1,
    fontFamily: "ZenKakuGothicAntique-Regular",
    width: "80%",
    paddingBottom: 15
  },
  multiTextInput: {
    borderWidth: 1,
    fontFamily: "ZenKakuGothicAntique-Regular",
    width: "90%",
    height: 120,
    marginBottom: 50
  },
  labels: {
    ontFamily: "ZenKakuGothicAntique-Regular"
  }
});

export default Contact;
