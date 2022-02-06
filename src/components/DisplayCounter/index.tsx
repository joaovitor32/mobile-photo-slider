import React, { useRef, useEffect } from "react";
import { View, Animated } from "react-native";

import { DisplayCounterProps } from "../../types";
import { styles } from "./styles";

const DisplayCounter: React.FC<DisplayCounterProps> = ({
  primaryColor,
  secondaryColor,
  indexImage,
  testID,
  ...rest
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const marginLeftAnim = useRef(new Animated.Value(10)).current;

  useEffect(() => {
    fadeAnim.setValue(0);
    marginLeftAnim.setValue(10);

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),

      Animated.timing(marginLeftAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, [indexImage]);

  return (
    <View {...rest} testID={testID} style={styles.indicator}>
      <View style={[{ borderColor: primaryColor }, styles.outerCircle]}>
        <View style={[{ backgroundColor: secondaryColor }, styles.innerCircle]}>
          <Animated.Text
            style={[
              {
                opacity: fadeAnim,
                transform: [
                  {
                    translateX: marginLeftAnim,
                  },
                ],
              },
              { color: primaryColor },
              styles.textIndex,
            ]}
          >
            {indexImage + 1}
          </Animated.Text>
        </View>
      </View>
    </View>
  );
};

export default DisplayCounter;
