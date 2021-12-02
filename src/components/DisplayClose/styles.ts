import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  indicator: {
    width,
    bottom: 44,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
  },

  outerCircle: {
    width: 64,
    height: 64,
    borderWidth: 2,
    alignItems: "center",
    borderRadius: 32,
    justifyContent: "center",
  },

  innerCircle: {
    width: 52,
    height: 52,
    alignItems: "center",
    borderRadius: 26,
    justifyContent: "center",
  },

  textIndex: {
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
});
