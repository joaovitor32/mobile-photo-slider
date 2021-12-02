import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  indicator: {
    width,
    top: 20,
    left: 15,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  outerCircle: {
    width: 48,
    height: 48,
    borderWidth: 2,
    alignItems: "center",
    borderRadius: 24,
    justifyContent: "center",
  },

  innerCircle: {
    width: 38,
    height: 38,
    alignItems: "center",
    borderRadius: 100 / 2,
    justifyContent: "center",
  },

  textIndex: {
    fontSize: 20,
    fontFamily: "Roboto",
  },
});
