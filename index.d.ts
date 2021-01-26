import React,{ ReactChildren,ReactChild } from 'react'

type CarouselProps={

    photos: string[];
    primaryColor: string;
    secondaryColor: string;
    checkboxColor:string;
    Icon?: ReactChild | ReactChildren;
    setPhotos: (photos:string[]) => void,
    
}

export default class Carousel extends React.Component<CarouselProps> {}

