# Mobile photo slider - React Native
Mobile photo slider for React Native

## Installation

```bash
npm install --save mobile-photo-slider
```

## Usage

```js
import React,{useState} from 'react';
import Carousel from 'mobile-photo-slider';

interface ComponentsProps{
  photos:string[]
}

const Component<ComponentProps>: React.FC = ({photos}) => {
   
  const [pickedPhotos,setPickedPhotos] = useState([])
  
   return (<Carousel
      photos={photos}
      setPhotos={setPickedPhotos}
      primaryColor={'white'}
      secondaryColor={'blue'}
      checkboxColor={'white'}
  />)


};

export default Component;
```

## Properties

| Prop                      | Description                                                                                                                                                                                                                                                                                                             | Default        |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| **`primaryColor`**               | string related to color | none   
| **`secondaryColor`**               | string related to color | none
| **`checkboxColor`**               | string related to color | none   
| **`photos`**               | Array of string containing url's | none
| **`setPhotos`**               | useState hook to get chosen photos  | none



## Demo

![Mobile Photo Slider](demo/git.gif)
