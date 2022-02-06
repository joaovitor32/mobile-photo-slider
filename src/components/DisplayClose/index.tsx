import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { DisplayCloseProps } from "../../types";
import { styles } from "./styles";

const DisplayClose: React.FC<DisplayCloseProps> = ({
  setOpen,
  primaryColor,
  secondaryColor,
  testID,
}) => {
  return (
    <TouchableOpacity
      testID={testID}
      onPress={() => setOpen(false)}
      style={styles.indicator}
    >
      <View style={[{ borderColor: primaryColor }, styles.outerCircle]}>
        <View style={[{ backgroundColor: secondaryColor }, styles.innerCircle]}>
          <Text style={[{ color: primaryColor }, , styles.textIndex]}> X </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DisplayClose;
