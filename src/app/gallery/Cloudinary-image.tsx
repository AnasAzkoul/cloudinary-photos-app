"use client"
import {CldImage} from 'next-cloudinary';
import React from 'react'

interface Props {
  src: string
}

const CloudinaryImage = ({src}: Props) => {
  return (
    <CldImage
      width='300'
      height='600'
      src={src}
      sizes='100vw'
      alt='Description of my image'
    />
  );
}

export default CloudinaryImage
