import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

export default function DropdownFilter() {
  const [valueRegion, setValueRegion] = useState(null);
  const [isFocusRegion, setIsFocusRegion] = useState(false);

  const [valueVille, setValueVille] = useState(null);
  const [isFocusVille, setIsFocusVille] = useState(false);

  const renderLabelRegion = () => {
    if (valueRegion || isFocusRegion) {
      return (
        <Text style={[styles.label, isFocusRegion && { color: "blue" }]}>
          choose region
        </Text>
      );
    }
    return null;
  };

  const renderLabelVille = () => {
    if (valueVille || isFocusVille) {
      return (
        <Text style={[styles.label, isFocusVille && { color: "blue" }]}>
          choose city
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        {renderLabelRegion()}
        <Dropdown
          style={[styles.dropdown, isFocusRegion && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocusRegion ? "Select region" : "..."}
          searchPlaceholder="Search..."
          value={valueRegion}
          onFocus={() => setIsFocusRegion(true)}
          onBlur={() => setIsFocusRegion(false)}
          onChange={(item) => {
            setValueRegion(item.value);
            setIsFocusRegion(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocusRegion ? "blue" : "black"}
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
      <View style={styles.container}>
        {renderLabelVille()}
        <Dropdown
          style={[styles.dropdown, isFocusVille && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocusVille ? "Select city" : "..."}
          searchPlaceholder="Search..."
          value={valueVille}
          onFocus={() => setIsFocusVille(true)}
          onBlur={() => setIsFocusVille(false)}
          onChange={(item) => {
            setValueVille(item.value);
            setIsFocusVille(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocusVille ? "blue" : "black"}
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  /** drop down */
  container: {
    width: 200,
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  /** Header */
  header: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 12,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: "#e3e3e3",
  },
});
