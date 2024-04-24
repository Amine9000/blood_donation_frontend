import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import RdvForm from "./RdvForm";

const centerStack = createStackNavigator();

export default function CenterStack() {
  return (
    <centerStack.Navigator initialRouteName="home">
      <centerStack.Screen name="home" options={{ headerShown: false }}>
        {(props) => <Home {...props} />}
      </centerStack.Screen>
      <centerStack.Screen name="rdvform" options={{ headerShown: false }}>
        {(props) => <RdvForm {...props} />}
      </centerStack.Screen>
    </centerStack.Navigator>
  );
}
