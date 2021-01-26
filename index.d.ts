import React,{ ReactChildren,ReactChild } from 'react'

export interface CarouselProps{

    photos: string[];
    primaryColor: string;
    secondaryColor: string;
    checkboxColor:string;
    Icon?: ReactChild | ReactChildren;
    setPhotos: (photos:string[]) => void,

}

export class Carousel extends React.Component<CarouselProps> {}
