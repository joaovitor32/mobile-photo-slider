import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  box: {
    flex: 1,
    zIndex: 10,
    backgroundColor: "black",
  },

  boxLoading: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
  },

  imageBackground: {
    width,
    height,
  },

  image: {
    width,
    height,
    flex: 1,
    resizeMode: "cover",
  },

  animatedView: {
    width,
    height,
    position: "absolute",
  },

  boxClose: {
    width,
    bottom: 24,
    right: 24,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  borderRadiusClose: {
    bottom: 24,
    width: 56,
    height: 56,
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  textClose: {
    fontSize: 44,
    color: "white",
    fontWeight: "bold",
  },
});
