import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, OtherScreen } from "../screens";

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Other" component={OtherScreen} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
