import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  navigation: any;
};

const Home: React.FC<Props> = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="other Screen"
        onPress={() => navigation.navigate("Other")}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
