import React from 'react';
import Carousel from '../Carousel';
import { render, fireEvent } from '@testing-library/react-native'

import photos from '../../data/data';

const setPhotos=jest.fn();

describe('Carousel component', () => {

  let getByTestId:any;
  let getAllByTestId :any;

  beforeEach(()=>{
    ({ getByTestId, getAllByTestId  } = render(<Carousel 
      setPhotos={setPhotos}
      photos={photos} 
      primaryColor={'white'}
      secondaryColor={'orange'}
    />));
  })
  


  it('Testing Flatlist - photos empty array', () => {

    const { getByTestId } = render(<Carousel 
      setPhotos={setPhotos}
      photos={[]} 
      primaryColor={'white'}
      secondaryColor={'orange'}
    />)
    ;
    expect(getByTestId('loading-box')).not.toBeNull();

  })

  it('Testing Flatlist', () => {
    
    expect(getByTestId('flat-list')).not.toBeNull();

  })

  it('Testing Flatlist - Add photo to picked photos', () => {

    const touchableAddPickedPhoto =  getAllByTestId('add-picked-photo');
  
    fireEvent.press(touchableAddPickedPhoto[0]);
    fireEvent.press(touchableAddPickedPhoto[0]);

  })

  it('Testing Flatlist - Touchable opacity check button', () => {

    const touchable =  getByTestId('check-button');
  
    fireEvent.press(touchable);

    expect(setPhotos).toBeCalled();

  })

})