import { View, StyleSheet } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Button, Input, Image, Text } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { auth } from "../firebase";

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useLayoutEffect(() => {
      navigation.setOptions({
        headerBackTitle: "Login",
      });

    }, [navigation]);

  const register = () => {
    auth.createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL:
          imageUrl ||
          "https://w7.pngwing.com/pngs/328/448/png-transparent-computer-icons-online-chat-chat-cloud-orange-online-chat-avatar.png",
        });
    })
    .catch((error) => alert(error.message));
  };



  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="light"/>
      <Text h3 style={{ marginBottom: 50 }}>
        Create an Account
        </Text>
        <View style={styles.inputContainer}>
        <Input placeholder="Full Name" autoFocus type="text"
        value={name} onChangeText={(text) => setName(text)}
        />
        <Input placeholder="Email" type="email"
        value={email} onChangeText={(text) => setEmail(text)}
        />
        <Input placeholder="Password" type="password"
        value={password} onChangeText={(text) => setPassword(text)}
        secureTextEntry
        />
        <Input placeholder="profile pic (optional) " type="text"
        value={imageUrl} onChangeText={(text) => setImageUrl(text)}
        onSubmitEditing={register}
        />
        </View>

        <Button raisedr
        containerStyle={styles.button}
        onPress={register}
        title="Register"
        />
        <View style={{ height: 100 }}/>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      backgroundColor: "white",
    },
    button: {
      width: 200,
      marginTop: 15,
    },
    inputContainer: {
      width: 300,
    },
});