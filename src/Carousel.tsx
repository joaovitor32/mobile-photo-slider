import React, { useState, useCallback } from 'react';

import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  useWindowDimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto';
import DisplayCounter from './components/DisplayCounter';


interface CarouselProps {
  photos: string[];
  primaryColor:string;
  secondaryColor:string;
  setPhotos: (photos:string[]) => void,
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Carousel: React.FC<CarouselProps> = ({setPhotos,primaryColor,secondaryColor,photos}) => {

  const { width: windowWidth } = useWindowDimensions();

  const [indexImage, setIndexImage] = useState(0);
  const [pickedPhotos, setPickedPhotos] = useState<string[]>([]);

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const onViewRef = React.useRef((viewableItems: any) => {
    setIndexImage(viewableItems.changed[0].index)
  })

  const addPickedPhoto = useCallback((elem: string) => {

    if (pickedPhotos.includes(elem)) {
      setPickedPhotos(pickedPhotos.filter(photo => photo !== elem));
      return;
    }
    setPickedPhotos([...pickedPhotos, elem]);

  }, [pickedPhotos, setPickedPhotos])

  return (<>

    {photos.length != 0 && <View style={styles.box} >

      <Animated.FlatList
        data={photos}
        horizontal
        bounces={false}
        keyExtractor={photo => photo}
        snapToAlignment='start'
        renderToHardwareTextureAndroid
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.95}
        testID="flat-list"

        onScroll={Animated.event(
          [{
            nativeEvent: {
              contentOffset: { x: scrollX },
            }
          }],
          { useNativeDriver: true }
        )}

        scrollEventThrottle={16}

        renderItem={({ item, index }) => {

          const inputRange = [
            (index - 1) * windowWidth,
            (index) * windowWidth,
            (index + 1) * windowWidth,
          ];

          const opacityValue = scrollX.interpolate({
            inputRange: inputRange,
            outputRange: [0, 1, 0],
            extrapolate: 'clamp',
          });

          const scaleValue = scrollX.interpolate({
            inputRange: inputRange,
            outputRange: [0.6, 1, 0.6],
            extrapolate: 'clamp',
          });

          const rotateValue = scrollX.interpolate({
            inputRange,
            outputRange: ['-20deg', '0deg', '20deg'],
            extrapolate: "clamp"
          })
          
          return <>

            <Animated.View style={
              {
                opacity: opacityValue,
                transform: [
                  { rotateY: rotateValue },
                  { scale: scaleValue, }
                ]
              }}>

              <TouchableOpacity testID="add-picked-photo" style={styles.checkbox} onPress={() => addPickedPhoto(item)} >

                <Icon
                  size={24}
                  color={primaryColor}
                  name={!pickedPhotos.includes(item) ? 'checkbox-passive' : 'checkbox-active'}
                />

              </TouchableOpacity>

              <Animated.Image style={styles.image} source={{ uri: item }} />

            </Animated.View>

          </>

        }}

      />

      <DisplayCounter 
        primaryColor={primaryColor} 
        secondaryColor={secondaryColor}
        indexImage={indexImage} 
      />

      <TouchableOpacity  testID="check-button" onPress={() => setPhotos(pickedPhotos)} >
        <Icon
          size={24}
          style={styles.check}
          color={primaryColor}
          name={'check'}
        />
      </TouchableOpacity>  

    </View>}

    {photos.length == 0 &&

      <View testID="loading-box" style={styles.boxLoading}>
        <ActivityIndicator size={80} color="white" />
      </View>
    }

  </>
  );
};

const styles = StyleSheet.create({

  box: {
    flex: 1,
    backgroundColor: 'black',
  },

  boxLoading: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center'
  },

  checkbox: {
    top: 20,
    right: 20,
    zIndex: 1,
    position: 'absolute',
  },

  imageBackground: {
    width,
    height,
  },

  image: {
    width,
    height,
    flex: 1,
    resizeMode: 'cover',
  },

  animatedView: {
    width,
    height,
    position: "absolute",
  },

  check: {
    width,
    bottom: 30,
    position: 'absolute',
    textAlign: 'center'
  }

});

export default Carousel;
