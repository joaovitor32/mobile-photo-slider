import React from 'react';
import Carousel from '../Carousel'; 
import { render } from '@testing-library/react-native'

describe('Carousel component',()=>{

  it('Should render main component properly',()=>{

    const {toJSON} = render(<Carousel/>);
    expect(toJSON()).toMatchSnapshot()

   
  })

})