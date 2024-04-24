import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import NavBarNoSearch from "../components/NavBarNoSearch";
import { useSelector } from "react-redux";
import { randomColor } from "../utils/utilities";

const options = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: false,
};

const CARD_WIDTH = Math.min(Dimensions.get("screen").width * 0.95, 400);

export default function Profile() {
  const user = useSelector((state) => state.user);
  const [stats, setStats] = useState([
    { label: "total", value: 0 },
    { label: "level", value: "Gold" },
  ]);

  useEffect(() => {
    console.log(user.rdvs)
    setStats([
      {
        label: "total",
        value: user.total_blood ? `${user.total_blood} ml` : "0 ml",
      },
      {
        label: "level",
        value: user.level.label ? `${user.level.label} Donor` : "loading",
      },
    ]);
  }, [user]);
  const { bgColor, textColor } = randomColor();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f4f4f4" }}>
      <NavBarNoSearch />
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.profile}>
              <View style={styles.profileTop}>
                <View style={styles.avatar}>
                  <View
                    style={{
                      backgroundColor: bgColor,
                      height: 60,
                      width: 60,
                      borderRadius: 5,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: textColor,
                        fontSize: 28,
                        fontWeight: "bold",
                        lineHeight: 32,
                      }}
                    >
                      {user.firstName[0] + user.lastName[0]}
                    </Text>
                  </View>

                  <View style={styles.avatarNotification} />
                </View>

                <View style={styles.profileBody}>
                  <Text
                    style={styles.profileTitle}
                  >{`${user.firstName} ${user.lastName}`}</Text>

                  <Text style={styles.profileSubtitle}>{user.email}</Text>
                </View>
              </View>

              <Text style={styles.profileDescription}>{user.bio}</Text>
            </View>

            <View style={styles.stats}>
              {stats.map(({ label, value }, index) => (
                <View
                  key={index}
                  style={[
                    styles.statsItem,
                    index === 0 && { borderLeftWidth: 0 },
                  ]}
                >
                  <Text style={styles.statsItemText}>{label}</Text>

                  <Text style={styles.statsItemValue}>{value}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.list}>
            <View style={styles.listHeader}>
              <Text style={styles.listTitle}>My History</Text>
            </View>

            <ScrollView
              contentContainerStyle={styles.listContent}
              showsHorizontalScrollIndicator={false}
            >
              {user.rdvs &&
                user.rdvs.map(({ center, date, blood_in_mils }, index) => (
                  <View style={styles.card} key={index}>
                    <View style={styles.cardTop}>
                      <View style={styles.cardIcon}>
                        <FeatherIcon color="#000" name={"droplet"} size={20} />
                      </View>

                      <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>{center.label}</Text>

                        <Text style={styles.cardSubtitle}>
                          {blood_in_mils} pph
                        </Text>
                      </View>
                    </View>

                    <View style={styles.cardFooter}>
                      <Text style={styles.cardFooterText}>
                        {center.address}
                      </Text>

                      <Text style={styles.cardFooterText}>
                        {new Intl.DateTimeFormat("en-US", options).format(
                          new Date(date)
                        )}
                      </Text>
                    </View>
                  </View>
                ))}
              {(user.rdvs == undefined || user.rdvs == []) && (
                <Text style={{ color: "#999" }}>No donations yet.</Text>
              )}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  /** Content */
  content: {
    paddingTop: 12,
    paddingHorizontal: 24,
  },
  contentActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 18,
    marginHorizontal: -6,
    marginBottom: 0,
  },
  /** Profile */
  profile: {
    paddingTop: 4,
    paddingBottom: 16,
  },
  profileTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  profileBody: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    paddingLeft: 16,
  },
  profileTitle: {
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 32,
    color: "#121a26",
    marginBottom: 6,
  },
  profileSubtitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#778599",
  },
  profileDescription: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 18,
    color: "#576579",
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
    marginTop: 10,
  },
  profileTags: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  profileTagsItem: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 18,
    color: "#266ef1",
    marginRight: 4,
  },
  /** Avatar */
  avatar: {
    position: "relative",
  },
  avatarImg: {
    width: 80,
    height: 80,
    borderRadius: 9999,
  },
  avatarNotification: {
    position: "absolute",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
    bottom: 1,
    right: 1,
    width: 15,
    height: 15,
    backgroundColor: "#22C55E",
  },
  /** Stats */
  stats: {
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#90a0ca",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 1,
  },
  statsItem: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    borderLeftWidth: 1,
    borderColor: "rgba(189, 189, 189, 0.32)",
  },
  statsItemText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18,
    color: "#778599",
    marginBottom: 5,
  },
  statsItemValue: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20,
    color: "#121a26",
  },
  /** Button */
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 2,
    backgroundColor: "transparent",
    borderColor: "#266EF1",
  },
  btnText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    color: "#266EF1",
  },
  btnPrimary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 2,
    backgroundColor: "#266EF1",
    borderColor: "#266EF1",
  },
  btnPrimaryText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    color: "#fff",
  },
  /** List */
  list: {
    marginTop: 16,
  },
  listHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  listTitle: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 22,
    color: "#4b5563",
  },
  listAction: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    color: "#778599",
  },
  listContent: {
    paddingVertical: 12,
    alignItems: "center",
    gap: 10,
    marginBottom: 80,
  },
  /** Card */
  card: {
    width: CARD_WIDTH,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "#90a0ca",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardIcon: {
    width: 44,
    height: 44,
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eff1f5",
  },
  cardBody: {
    paddingLeft: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 18,
    color: "#121a26",
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 18,
    color: "#778599",
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 18,
  },
  cardFooterText: {
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 18,
    color: "#778599",
  },
});
