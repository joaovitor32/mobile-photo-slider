export interface DisplayCounterProps {
  indexImage: number;
  primaryColor: string;
  secondaryColor: string;
  testID: string;
}

export interface DisplayCloseProps {
  primaryColor: string;
  secondaryColor: string;
  testID: string;
  setOpen: (open: boolean) => void;
}

export interface Carousel {
  photos: string[];
  primaryColor: string;
  secondaryColor: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}
