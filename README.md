# Mobile photo slider - React Native
Mobile photo slider for React Native

## Installation

```bash
npm install --save mobile-photo-slider
```

## Usage

```js
import React,{useState} from 'react;
import Carousel from 'mobile-photo-slider';

const Component: React.FC = () => {
  
  photos=['https://avatars.githubusercontent.com/u/25807856?s=400&u=ae43fb642d1a543ddfaca2c7a4110bfd6b7720eb&v=4']
  
  const [pickedPhotos,setPickedPhotos] = useState([])
  
  return <Carousel
      photos={photos}
      setPhotos={setPickedPhotos}
      primaryColor={"white"}
      secondaryColor={"orange"}
  />

};

export default Component;
```

## Properties

| Prop                      | Description                                                                                                                                                                                                                                                                                                             | Default        |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| **`primaryColor`**               | string related to color | none   
| **`secondaryColor`**               | string related to color | none
| **`photos`**               | Array of string containing url's | none
| **`setPhotos`**               | useState hook to get chosen photos  | none



## Demo

![Mobile Photo Slider](demo/git.gif)
