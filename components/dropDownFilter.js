import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import HOST_LINK from "../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  getCentersSuccess,
  getRegionsFailure,
  getRegionsSuccess,
  getVillesSuccess,
} from "../redux/slices/centersSlice";

const WIDTH = Dimensions.get("window").width;

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
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [centers, setCenters] = useState([]);
  const [regions, setRegions] = useState([]);
  const [villes, setVilles] = useState([]);
  const [valueRegion, setValueRegion] = useState(null);
  const [idRegion, setIdRegion] = useState(1);
  const [isFocusRegion, setIsFocusRegion] = useState(false);

  const [valueVille, setValueVille] = useState(null);
  const [isFocusVille, setIsFocusVille] = useState(false);

  useEffect(() => {
    getRegion();
  }, [valueRegion]);

  async function getRegion() {
    try {
      const res = await axios.get(`${HOST_LINK}/regions`, {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      });
      dispatch(
        getRegionsSuccess({
          regions: res.data,
        })
      );
      setRegions(res.data);
      dispatch(getRegionsSuccess({ regions: res.data }));
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, isFocusRegion && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          // data={data}
          data={regions}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocusRegion ? valueRegion : "..."}
          searchPlaceholder="Search..."
          value={valueRegion}
          onFocus={() => setIsFocusRegion(true)}
          onBlur={() => setIsFocusRegion(false)}
          onChange={(item) => {
            setValueRegion(item.label);
            setValueVille(item.villes != [] ? item.villes[0].label : "none");
            setIdRegion(item.id);
            setVilles(item.villes);
            dispatch(getCentersSuccess({ centers: item.villes[0].centers }));
            dispatch(getVillesSuccess({ villes: item.villes }));
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
        <Dropdown
          style={[styles.dropdown, isFocusVille && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={villes}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={
            !isFocusVille ? (valueVille ? valueVille : "select ville") : "..."
          }
          searchPlaceholder="Search..."
          value={valueVille}
          onFocus={() => setIsFocusVille(true)}
          onBlur={() => setIsFocusVille(false)}
          onChange={(item) => {
            setValueVille(item.label);
            setCenters(item.centers);
            dispatch(getCentersSuccess({ centers: item.centers }));
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
    width: WIDTH - 20,
    paddingVertical: 5,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 3,
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
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
  /** Header */
  header: {
    backgroundColor: "white",
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    paddingHorizontal: 12,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: "#e3e3e3",
  },
});
