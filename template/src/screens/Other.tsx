import { View, Text } from "react-native";
import React from "react";

type Props = {
  navigation: any;
};

const Other: React.FC<Props> = ({ navigation }: Props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
      }}
    >
      <Text>Other Screen</Text>
    </View>
  );
};

export default Other;
