import React, { useState, useRef, useCallback, useEffect } from 'react';

import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  useWindowDimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto';
import Pagination from './components/Pagination';

import photos from './data';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Carousel: React.FC = () => {

  const { width: windowWidth } = useWindowDimensions();

  const [indexImage, setIndexImage] = useState(0);
  const [pickedPhotos, setPickedPhotos] = useState<string[]>([]);

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const zoomScale = React.useRef(new Animated.Value(0)).current;

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
            (index ) * windowWidth,
            (index+1) * windowWidth,
          ];

          const opacityValue = scrollX.interpolate({
            inputRange:inputRange,
            outputRange: [0, 1, 0],
            extrapolate: 'clamp',
          });

          const scaleValue = scrollX.interpolate({
            inputRange:inputRange,
            outputRange: [0.85, 1, 0.85],
            extrapolate: 'clamp',
          });

          return <>

            <Animated.View style={
              {
                opacity: opacityValue,
                transform:[{
                  scale:scaleValue
                }]

              }}>

              <TouchableOpacity style={styles.checkbox} onPress={() => addPickedPhoto(item)} >

                <Icon
                  size={24}
                  color={'white'}
                  name={!pickedPhotos.includes(item) ? 'checkbox-passive' : 'checkbox-active'}
                />

              </TouchableOpacity>

              <Animated.Image style={styles.image} source={{ uri: item }} />

            </Animated.View>

          </>

        }}


      />

      <Pagination photos={photos} indexImage={indexImage} />

      <Icon
        size={24}
        style={styles.check}
        color={'white'}
        name={'check'}
      />

    </View>}

    {photos.length == 0 &&

      <View style={styles.boxLoading}>
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
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 1
  },

  imageBackground: {
    width,
    height,
  },

  image: {
    flex: 1,
    width,
    height,
    resizeMode: 'cover',
  },

  animatedView: {
    position: "absolute",
    width,
    height,
  },

  check: {
    position: 'absolute',
    bottom: 30,
    width,
    textAlign: 'center'
  }

});

export default Carousel;
