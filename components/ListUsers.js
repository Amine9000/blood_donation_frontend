import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import Options from "./Options";
import Model from "./Model";
import NavBar from "./NavBar";
import { randomColor } from "../utils/utilities";

const lessons = [
  {
    fname: "Squat",
    id: 1,
    lname: "bbd",
  },
  {
    fname: "Pull-up",
    id: 2,
    lname: "bbd",
  },
  {
    fname: "Push-up",
    id: 3,
    lname: "bbd",
  },
  {
    fname: "Calisthenics",
    id: 4,
    lname: "bbd",
  },
  {
    fname: "Lunge",
    id: 5,
    lname: "bbd",
  },
  {
    fname: "Squat",
    id: 6,
    lname: "bbd",
  },
  {
    fname: "Pull-up",
    id: 7,
    lname: "bbd",
  },
  {
    fname: "Push-up",
    id: 8,
    lname: "bbd",
  },
  {
    fname: "Calisthenics",
    id: 9,
    lname: "bbd",
  },
  {
    fname: "Lunge",
    id: 10,
    lname: "bbd",
  },
];

export default function ListUsers({ navigation }) {
  const route = useRoute();
  const routeName = route.name;
  const [modelVisibele, setModelVisibele] = useState(false);
  const [modelData, setModelData] = useState({
    id: 1,
    fname: "Amine",
    lname: "Bbd",
  });
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <NavBar />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerAction}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("admincontrolle");
              }}
            >
              <FeatherIcon color="#000" name="arrow-left" size={24} />
            </TouchableOpacity>
          </View>

          <Text style={styles.headerTitle}>{routeName}</Text>
        </View>

        {lessons.map(({ fname, lname, id }) => {
          const { bgColor, textColor } = randomColor();
          return (
            <View key={id} style={styles.card}>
              <View
                style={{
                  backgroundColor: bgColor,
                  height: 40,
                  width: 40,
                  borderRadius: 5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ color: textColor, fontSize: 16, fontWeight: "bold" }}
                >
                  {fname[0] + lname[0]}
                </Text>
              </View>
              <View>
                <Text style={styles.cardTitle}>{fname + " " + lname}</Text>
              </View>

              <View style={styles.cardAction}>
                <TouchableOpacity
                  onPress={() => {
                    setModelVisibele(!modelVisibele);
                    setModelData({
                      id,
                      fname,
                      lname,
                    });
                  }}
                >
                  <FeatherIcon color="#000" name="more-vertical" size={24} />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
      {modelVisibele && (
        <Model
          modelData={modelData}
          navigation={navigation}
          setVisibility={setModelVisibele}
          updateScreen={"userform"}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingBottom: 70,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1d1d1d",
    marginBottom: 12,
  },
  /** Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: "600",
    color: "#000",
  },
  /** Card */
  card: {
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 19,
  },
  cardImg: {
    width: 50,
    height: 50,
    borderRadius: 9999,
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
    marginBottom: 8,
  },
  cardStats: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardStatsItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
  cardStatsItemText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#636a73",
    marginLeft: 2,
  },
  cardAction: {
    marginLeft: "auto",
  },
});
