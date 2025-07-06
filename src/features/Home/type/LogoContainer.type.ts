type LogoContainer_Image_Type = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};



interface LogoContainer {
    images: LogoContainer_Image_Type[];
    className?: string;
    containerClassName?: string;
    imageClassName?: string;
    isLoading?: boolean;
}



export type { LogoContainer_Image_Type , LogoContainer };