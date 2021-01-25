import React from 'react'

export interface CarouselProps<T>{

    photos: string[];
    primaryColor:string;
    secondaryColor:string;
    setPhotos: (photos:string[]) => void,

}

export default class Carousel<T> extends React.Component<CarouselProps<T>> {}
