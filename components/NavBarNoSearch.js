import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function NavBarNoSearch() {
  return (
    <View style={styles.header}>
      <View style={styles.headerAction}>
        <Image
          style={styles.navIcon}
          source={require("../assets/bitmap.png")}
        />
      </View>
      <View style={styles.headerAction}>
        <Image
          style={styles.appName}
          source={require("../assets/appname.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  /** Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    paddingTop: 40,
    borderBottomWidth: 1,
    borderColor: "#e3e3e3",
  },
  headerAction: {
    width: 60,
    paddingRight: 20,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  appName: {
    width:120,
    height: 50,
  },
  // navIcon

  navIcon: {
    width: 50,
    height: 50,
    borderRadius: 9999,
  },
});
