'use client';
import React, { useState } from 'react';
import { CldImage } from 'next-cloudinary';
import Icons from '@/components/icons';

interface Props {
  src: string;
}

const CloudinaryImage = ({ src }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className='relative'>
      <CldImage
        width='300'
        height='300'
        src={src}
        sizes='100vw'
        alt='Description of my image'
      />
      <button
        className='absolute top-1 right-2'
        onClick={() => setIsFavorite(!isFavorite)}
      >
        {isFavorite ? <Icons.FavoriteSolidIcon /> : <Icons.FavoriteIcon />}
      </button>
    </div>
  );
};

export default CloudinaryImage;
