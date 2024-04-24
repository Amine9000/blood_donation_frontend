import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import FeatherIcon from "react-native-vector-icons/Feather";

const ScreenWith = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

const screenNames = ["Regions", "Villes", "Centers"];

export default function Model({
  navigation,
  setVisibility,
  modelData,
  updateScreen,
  screenName = null,
}) {
  const { fname, lname } = modelData;
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);
  const [addItem, setAddItem] = useState(false);
  const rotationStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  }, []);

  useEffect(() => {
    scale.value = withTiming(1.2, { duration: 900 });
    opacity.value = withTiming(1, { duration: 900 });
  }, []);

  useEffect(() => {
    if (screenName) {
      if (screenNames.includes(screenName)) {
        setAddItem(true);
      }
    }
  }, [screenName]);
  return (
    <View
      style={styles.wrapper}
      onPress={() => {
        setVisibility(false);
      }}
    >
      <View style={styles.card}>
        <View style={styles.cardTop}>
          <Animated.View style={rotationStyle}>
            <FeatherIcon color="#374151" name="sliders" size={50} />
          </Animated.View>
        </View>

        <View style={styles.cardBody}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{fname + " " + lname}</Text>
          </View>
          <View style={styles.section}>
            <View style={styles.sectionBody}>
              <View style={[styles.rowWrapper, styles.rowFirst]}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(updateScreen);
                  }}
                  style={styles.row}
                >
                  <Text style={styles.rowLabel}>update</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.rowWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.row}
                >
                  <Text style={styles.rowLabel}>delete</Text>
                </TouchableOpacity>
              </View>
              {addItem && (
                <View style={styles.rowWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate(updateScreen);
                    }}
                    style={styles.row}
                  >
                    <Text style={styles.rowLabel}>Add</Text>
                  </TouchableOpacity>
                </View>
              )}
              <View style={styles.rowWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    setVisibility(false);
                  }}
                  style={styles.row}
                >
                  <Text style={styles.rowLabel}>concel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  /** Row */
  row: {
    height: 44,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rowWrapper: {
    paddingLeft: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#f0f0f0",
  },
  rowLabel: {
    fontSize: 16,
    letterSpacing: 0.24,
    color: "#000",
  },
  /** wrapper */
  wrapper: {
    backgroundColor: "rgba(100, 100, 100, 0.5)",
    width: ScreenWith,
    height: ScreenHeight,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
  },
  /** Card */
  card: {
    borderRadius: 12,
    backgroundColor: "#f0f0f0",
    color: "#fff",
    width: ScreenWith - 100,
    height: "auto",
    padding: 20,
    shadowColor: "#000",
  },
  cardTop: {
    height: 200,
    borderRadius: 12,
    backgroundColor: "#e1e1e1",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    elevation: 2,
  },
  cardImg: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardBody: {
    paddingVertical: 16,
    paddingHorizontal: 5,
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
    color: "#555",
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
