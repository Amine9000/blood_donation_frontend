import React from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

export default function NavBar() {
  return (
    <View style={styles.header}>
      <View style={styles.headerAction}>
        <Image
          style={styles.navIcon}
          source={require("../assets/bitmap.png")}
        />
      </View>

      <View style={styles.headerSearch}>
        <View style={styles.headerSearchIcon}>
          <FeatherIcon color="#778599" name="search" size={17} />
        </View>

        <TextInput
          autoCapitalize="words"
          autoComplete="name"
          placeholder="Search..."
          placeholderTextColor="#778599"
          style={styles.headerSearchInput}
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
    gap: 20,
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
  headerSearch: {
    position: "relative",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    backgroundColor: "#dddddd",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  headerSearchIcon: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: 34,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  headerSearchInput: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    paddingLeft: 34,
    width: "100%",
    fontSize: 16,
    fontWeight: "500",
  },
  // navIcon

  navIcon: {
    width: 50,
    height: 50,
    borderRadius: 9999,
  },
});
