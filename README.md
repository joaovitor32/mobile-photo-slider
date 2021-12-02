# Mobile photo slider - React Native
Mobile photo slider for React Native

## Installation

```bash
yarn add mobile-photo-slider
```

## Usage

```tsx
import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

import data from "./data/data";

import Carousel from "mobile-photo-slider";

interface ComponentsProps {
  photos: string[];
}

const Component: React.FC<ComponentsProps> = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <>
      {open && (
        <Carousel
          photos={data}
          primaryColor={"white"}
          secondaryColor={"blue"}
          open={open}
          setOpen={setOpen}
        />
      )}

      {!open && (
        <TouchableOpacity onPress={() => setOpen(true)}>
          <Text>Open</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Component;

```

## Properties

| Prop                      | Description                                                                                                                                                                                                                                                                                                             | Default        |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| **`primaryColor`**               | string related to color | none   
| **`secondaryColor`**               | string related to color | none
| **`open`**               | boolean associated with modal toogle | none   
| **`photos`**               | Array of string containing url's | none
| **`setOpen`**               | Function to open and close modal  | none


## Demo

![Mobile Photo Slider](demo/git.gif)
