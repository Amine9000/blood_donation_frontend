import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import NavBarNoSearch from "../components/NavBarNoSearch";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Fontisto } from "@expo/vector-icons";

const creneaux = [9, 10, 11, 12, 14, 15, 16, 17];

export default function RdvForm({ route, navigation }) {
  const [showDate, setShowDate] = useState(false);
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState(9);
  const { params } = route;
  const { backto } = params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <NavBarNoSearch />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Hello User Name</Text>

          <Text style={styles.subtitle}>update your account</Text>
        </View>

        <View style={styles.form}>
          <Text
            style={[styles.subtitle, { textAlign: "left", marginVertical: 10 }]}
          >
            choose a day
          </Text>
          <TouchableOpacity
            onPress={() => {
              setShowDate(true);
            }}
          >
            <View style={styles.dateInput}>
              <Fontisto name="date" size={20} color="black" />
              <Text style={styles.dateLabel}>
                {date
                  ? `${date.getDate()}/${
                      date.getMonth() + 1
                    }/${date.getFullYear()} at ${
                      hour < 10 ? "0" : ""
                    }${hour}:00`
                  : "choose a Date"}
              </Text>
              {showDate && (
                <RNDateTimePicker
                  mode="date"
                  value={date}
                  onChange={(d) => {
                    setDate(new Date(d.nativeEvent.timestamp));
                    setShowDate(false);
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
          <Text
            style={[styles.subtitle, { textAlign: "left", marginVertical: 10 }]}
          >
            choose an hour
          </Text>
          <View style={styles.hours}>
            {creneaux.map((creneau, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setHour(creneau);
                  }}
                >
                  <View
                    style={[
                      styles.hourInput,
                      {
                        backgroundColor:
                          creneau == hour ? "#354575" : "#f4f4f4",
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.hourLabel,
                        { color: creneau == hour ? "#f4f4f4" : "#555" },
                      ]}
                    >{`${creneau < 10 ? 0 : ""}${creneau}:00`}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(backto ? backto : "RDVs");
              }}
            >
              <View style={styles.btn}>
                <Text style={styles.btnText}>update</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(backto ? backto : "RDVs");
              }}
            >
              <View
                style={[
                  styles.btn,
                  { backgroundColor: "#f4f4f4", borderColor: "#777" },
                ]}
              >
                <Text style={[styles.btnText, { color: "#777" }]}>Concel</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // hours
  hours: {
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
  },
  hourInput: {
    // backgroundColor: "#f4f4f4",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    margin: 5,
  },
  // hours
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    justifyContent: "center",
  },
  header: {
    marginVertical: 36,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1d1d1d",
    marginBottom: 6,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#929292",
    textAlign: "center",
  },
  /** Form */
  form: {
    marginBottom: 24,
  },
  formAction: {
    marginVertical: 10,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
    textAlign: "center",
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },
  /** Button */
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: "#007aff",
    borderColor: "#007aff",
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "600",
    color: "#fff",
  },
  // date
  dateInput: {
    width: "100%",
    height: 40,
    borderRadius: 10,
    borderColor: "#777",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
  },
  dateLabel: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
  },
});
