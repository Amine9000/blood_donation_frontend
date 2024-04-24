import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import Profile from "./Profile";
import Settings from "./Settings";
import Home from "./Home";
import Admin from "./Admin";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import RdvForm from "./RdvForm";
import CenterStack from "./CenterStack";

function TabBar(props) {
  const { state, toggleTabBar } = props;
  const navigator = useNavigation();

  return (
    <View
      style={{
        maxHeight: 65,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        alignItems: "center",
        position: "absolute",
        left: 10,
        bottom: 0,
        right: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: "#edf2f4",
        padding: 10,
        display: toggleTabBar ? "flex" : "none",
      }}
    >
      {state.routes.map((route, i) => {
        const color = state.index == i ? "#edf2f4" : "#8d99ae";
        const bg = state.index == i ? "#ef233c" : "#edf2f4";
        let icon;
        switch (route.name) {
          case "centerstack":
            icon = <AntDesign name="home" size={24} color={color} />;
            break;
          case "profile":
            icon = (
              <Ionicons name="person-circle-sharp" size={24} color={color} />
            );
            break;
          case "settings":
            icon = <Ionicons name="settings-outline" size={24} color={color} />;
            break;
          case "admin":
            icon = (
              <MaterialIcons
                name="admin-panel-settings"
                size={24}
                color={color}
              />
            );
            break;

          default:
            break;
        }
        return (
          <TouchableWithoutFeedback
            onPress={() => {
              navigator.navigate(route.name);
            }}
            style={{
              width: 48,
              height: 48,
              padding: 0,
              backgroundColor: bg,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            key={route.key}
          >
            {icon}
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function HealthApp() {
  const [toggleTabBar, setToggleTabBar] = useState(true);
  return (
    <Tab.Navigator
      tabBar={(props) => {
        return <TabBar {...props} toggleTabBar={toggleTabBar} />;
      }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="profile">
        {(props) => <Profile {...props} />}
      </Tab.Screen>
      <Tab.Screen name="centerstack">
        {(props) => <CenterStack {...props} />}
      </Tab.Screen>
      <Tab.Screen name="settings">
        {(props) => <Settings {...props} />}
      </Tab.Screen>
      <Tab.Screen name="admin">{(props) => <Admin {...props} />}</Tab.Screen>
    </Tab.Navigator>
  );
}
