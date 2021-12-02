import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Animated,
  Platform,
  ActivityIndicator,
  useWindowDimensions,
  Modal,
  Easing,
} from "react-native";

import DisplayClose from "./components/DisplayClose";
import DisplayCounter from "./components/DisplayCounter";
import { styles } from "./styles";
import { Carousel as CarouselType } from "./types";

enum PIN {
  MIN = 0,
  MAX = 1,
}

const Carousel: React.FC<CarouselType> = ({
  /** Main color used on the component */
  primaryColor,
  /** Seconst most used color on the component */
  secondaryColor,
  /** Photos to be displayed */
  photos,
  /** Boolean to tell if modal is supposed to be closed or open */
  open,
  /** Function to change Boolean that controls modal */
  setOpen,
}) => {
  const { width: windowWidth } = useWindowDimensions();

  const [indexImage, setIndexImage] = useState(0);

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const anim = React.useRef(new Animated.Value(0)).current;

  const onViewRef = React.useRef((viewableItems: any) => {
    setIndexImage(viewableItems.changed[0].index);
  });

  const interpolateScale = useCallback((value: number): void => {
    Animated.timing(anim, {
      toValue: value,
      duration: 250,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      if (value === PIN.MIN) {
        setOpen(false);
      }
    });
  }, []);

  const spin = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ["30deg", "0deg"],
  });

  const translateY = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [150, 0],
  });

  useEffect(() => {
    interpolateScale(PIN.MAX);
  }, []);

  const setOpenHandler = (): void => {
    interpolateScale(PIN.MIN);
  };

  return (
    <>
      {photos.length != 0 && (
        <Modal animationType="fade" transparent={true} visible={open}>
          <Animated.View
            style={[
              styles.box,
              { translateY: translateY },
              { transform: [{ rotateX: spin }] },
            ]}
          >
            <Animated.FlatList
              data={photos}
              horizontal
              bounces={false}
              keyExtractor={(photo) => photo}
              snapToAlignment="start"
              renderToHardwareTextureAndroid
              viewabilityConfig={viewConfigRef.current}
              onViewableItemsChanged={onViewRef.current}
              decelerationRate={Platform.OS === "ios" ? 0 : 0.95}
              testID="flat-list"
              onScroll={Animated.event(
                [
                  {
                    nativeEvent: {
                      contentOffset: { x: scrollX },
                    },
                  },
                ],
                { useNativeDriver: true }
              )}
              scrollEventThrottle={16}
              renderItem={({ item, index }) => {
                const inputRange = [
                  (index - 1) * windowWidth,
                  index * windowWidth,
                  (index + 1) * windowWidth,
                ];

                const opacityValue = scrollX.interpolate({
                  inputRange: inputRange,
                  outputRange: [0, 1, 0],
                  extrapolate: "clamp",
                });

                const scaleValue = scrollX.interpolate({
                  inputRange: inputRange,
                  outputRange: [0.6, 1, 0.6],
                  extrapolate: "clamp",
                });

                const rotateValue = scrollX.interpolate({
                  inputRange,
                  outputRange: ["-30deg", "0deg", "30deg"],
                  extrapolate: "clamp",
                });

                return (
                  <>
                    <Animated.View
                      style={{
                        opacity: opacityValue,
                        transform: [
                          {
                            rotateY: rotateValue,
                          },
                          { scale: scaleValue },
                        ],
                      }}
                    >
                      <Animated.Image
                        style={styles.image}
                        source={{ uri: item }}
                      />
                    </Animated.View>
                  </>
                );
              }}
            />

            <DisplayCounter
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              indexImage={indexImage}
            />

            <DisplayClose
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              setOpen={() => setOpenHandler()}
            />
          </Animated.View>
        </Modal>
      )}

      {photos.length == 0 && (
        <View testID="loading-box" style={styles.boxLoading}>
          <ActivityIndicator size={80} color={primaryColor} />
        </View>
      )}
    </>
  );
};

export default Carousel;
