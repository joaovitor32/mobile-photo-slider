import React from 'react';
import Carousel from '../Carousel';
import { render, fireEvent } from '@testing-library/react-native'

import photos from '../data';

const eventData = {
  nativeEvent: {
    contentOffset: {
      x: 200,
    },
    contentSize: {
      // Dimensions of the scrollable content
      height: 500,
      width: 100,
    },
    layoutMeasurement: {
      // Dimensions of the device
      height: 100,
      width: 100,
    },
  },
};

describe('Carousel component', () => {

  it('Testing Flatlist', () => {

    const { getByTestId } = render(<Carousel photos={photos} />);
    expect(getByTestId('flat-list')).not.toBeNull();

  })


  it('Testing Flatlist - photos empty array', () => {

    const { getByTestId } = render(<Carousel photos={[]} />);
    expect(getByTestId('loading-box')).not.toBeNull();

  })

  it('Testing Flatlist - Add photo', () => {

    const { getAllByTestId } = render(<Carousel photos={photos} />);

    const touchableAddPickedPhoto =  getAllByTestId('add-picked-photo');
  
    fireEvent.press(touchableAddPickedPhoto[0]);
    fireEvent.press(touchableAddPickedPhoto[0]);

  })

})