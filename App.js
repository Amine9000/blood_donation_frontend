import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HealthApp from "./pages/HealthApp";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./redux/store";

const stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer initialRouteName="login">
        <stack.Navigator>
          <stack.Screen
            name="login"
            options={{ headerShown: false }}
            component={Login}
          />
          <stack.Screen
            name="healthapp"
            options={{ headerShown: false }}
            component={HealthApp}
          />
          <stack.Screen
            name="signup"
            options={{ headerShown: false }}
            component={Signup}
          />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
