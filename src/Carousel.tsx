import React, { useState, useRef, useCallback } from 'react';

import {
  StyleSheet,
  FlatList,
  Image,
  View,
  Dimensions,
  Text,
  Animated,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto';

import photos from './data';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const countDecimals = (value: number) => {

  let unidade,dezena;

  unidade= value % 10;
  value = (value - unidade) / 10;
  dezena = value % 10;

  return dezena;

}

const Carousel:React.FC = () => {

  const [indexImage, setIndexImage] = useState(0);
  const [pickedPhotos, setPickedPhotos] = useState<string[]>([]);

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

  const backgroundImageOpacity = useRef(new Animated.Value(0.5)).current;

  const onViewRef = React.useRef((viewableItems: any) => {
    
    backgroundImageOpacity.setValue(0.5);
    setIndexImage(viewableItems.changed[0].index)

  })

  const addPickedPhoto = useCallback((elem: string) => {

    if (pickedPhotos.includes(elem)) {
      setPickedPhotos(pickedPhotos.filter(photo => photo !== elem));
      return;
    }

    setPickedPhotos([...pickedPhotos, elem]);

  }, [pickedPhotos, setPickedPhotos])

  return (
    <View  style={styles.box} >

      {photos && <FlatList
        data={photos}
        keyExtractor={photo => photo}
        horizontal
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
        renderItem={({ item, index }) => (

          <Animated.View
            style={[
              indexImage == index ? {
                opacity: 1,
              } : { opacity: backgroundImageOpacity }
            ]}
          >

            <TouchableOpacity style={styles.checkbox} onPress={() => addPickedPhoto(item)} >

              <Icon
                size={24}
                color={'white'}
                name={!pickedPhotos.includes(item) ? 'checkbox-passive' : 'checkbox-active'}
              />

            </TouchableOpacity>

            <Image style={styles.image} source={{ uri: item }} />

          </Animated.View>

        )}


      />}

      <View style={styles.indicator}>

        {photos.map((item: string, index: number) => {

          if (countDecimals(index) === countDecimals(indexImage)) {
            return <View key={index + item} style={
              [index == indexImage ?
                { backgroundColor: 'orange' } :
                {
                  backgroundColor: 'transparent',
                  borderColor: 'white',
                  borderWidth: 1

                },
              styles.square]}>
              <Text style={styles.TextIndicator}>
                {index + 1}
              </Text>


            </View>
          }

        })}

        <Icon
          size={24}
          style={styles.check}
          color={'white'}
          name={'check'}
        />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  box: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    backgroundColor: 'black',
  },

  checkbox: {
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 1
  },

  image: {
    flex: 1,
    width,
    height,
    resizeMode: 'cover'
  },

  indicator: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 75,
    justifyContent: 'center',
    width,
  },

  TextIndicator: {
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',

  },

  animatedView: {
    position: "absolute",
    width,
    height,
  },

  square: {
    width: 22,
    height: 22,
    borderRadius: 100 / 2,
    textAlign: 'right',
    marginHorizontal: 4,
  },

  check: {
    position: 'absolute',
    top: 40,
  }

});

export default Carousel;
