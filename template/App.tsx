import React from "react";
import Store from "./src/store";
import { Provider } from "react-redux";
import NavigationStack from "./src/navigation/routes";
import { NavigationContainer } from "@react-navigation/native";

type Props = {};

const App = (props: Props) => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
