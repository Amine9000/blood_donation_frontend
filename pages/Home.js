import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import NavBar from "../components/NavBar";
import DropdownFilter from "../components/dropDownFilter";
import { useSelector } from "react-redux";

export default function Home({ navigation }) {
  const centerSelector = useSelector((state) => state.centers);
  const [centers, setCenters] = useState([]);
  useEffect(() => {
    setCenters(centerSelector.centers);
  }, [centerSelector]);
  return (
    <SafeAreaView style={{ backgroundColor: "#f2f2f2", paddingBottom: 150 }}>
      <NavBar />
      <DropdownFilter />
      <ScrollView contentContainerStyle={styles.container}>
        {centers &&
          centers.map(({ id, label, capacity, address }) => {
            return (
              <TouchableOpacity
                key={id}
                onPress={() => {
                  navigation.navigate("rdvform", {
                    centerId: id,
                    backto: "home",
                  });
                }}
              >
                <View style={styles.card}>
                  <View style={styles.cardBody}>
                    <View style={styles.cardHeader}>
                      <Text style={styles.cardTitle}>{label}</Text>
                    </View>

                    <View style={styles.cardStats}>
                      <View style={styles.cardStatsItem}>
                        <FeatherIcon color="#48496c" name="user" size={14} />

                        <Text style={styles.cardStatsItemText}>
                          {capacity} pph
                        </Text>
                      </View>

                      <View style={styles.cardStatsItem}>
                        <Text style={styles.cardStatsItemText}>
                          {"something"}
                        </Text>

                        <FeatherIcon color="#48496c" name="star" size={14} />
                      </View>
                    </View>

                    <View style={styles.cardFooter}>
                      <Text style={styles.cardFooterText}>{address}</Text>
                      <View
                        style={{
                          height: 10,
                          width: 10,
                          borderRadius: 10,
                          backgroundColor: true ? "#34d399" : "#c9a3af",
                        }}
                      ></View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 100,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1d1d1d",
    marginBottom: 12,
  },
  /** Card */
  card: {
    borderRadius: 5,
    backgroundColor: "white",
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
  },
  cardBody: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    justifyContent: "flex-start",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: "600",
    color: "#2d2d2d",
  },
  cardPrice: {
    fontSize: 20,
    fontWeight: "700",
    color: "#444",
  },
  cardStats: {
    paddingBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: -12,
  },
  cardStatsItem: {
    paddingHorizontal: 12,
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  cardStatsItemText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#48496c",
    marginLeft: 4,
  },
  cardFooter: {
    paddingTop: 8,
    borderTopWidth: 1,
    borderColor: "#e9e9e9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardFooterText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#909090",
  },
});
