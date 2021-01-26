import React,{ ReactChildren,ReactChild } from 'react'

export interface CarouselProps<T>{

    photos: string[];
    primaryColor: string;
    secondaryColor: string;
    checkboxColor:string;
    Icon?: ReactChild | ReactChildren;
    setPhotos: (photos:string[]) => void,

}

export class Carousel<T> extends React.Component<CarouselProps<T>> {}
