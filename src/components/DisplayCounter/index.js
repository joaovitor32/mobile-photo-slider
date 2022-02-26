import React, { useRef, useEffect } from "react";
import { View, Animated } from "react-native";
import { styles } from "./styles";
const DisplayCounter = ({ primaryColor, secondaryColor, indexImage, testID, ...rest }) => {
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
    return (React.createElement(View, Object.assign({}, rest, { style: styles.indicator }),
        React.createElement(View, { style: [{ borderColor: primaryColor }, styles.outerCircle] },
            React.createElement(View, { style: [{ backgroundColor: secondaryColor }, styles.innerCircle] },
                React.createElement(Animated.Text, { testID: testID, style: [
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
                    ] }, indexImage + 1)))));
};
export default DisplayCounter;
//# sourceMappingURL=index.js.map