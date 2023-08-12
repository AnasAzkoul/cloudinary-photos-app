'use client';
import Image from 'next/image';
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';

interface OnUploadTypes {
  info: {
    public_id: string;
  };
  event: 'success';
}

export default function Home() {
  const [imageId, setImageId] = useState('');

  const handleOnUpload = (results: any) => {
    if (typeof results.info === 'object') {
      setImageId(results.info?.public_id);
    }
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between px-24 py-6'>

      {imageId && (
        <CldImage
          width='300'
          height='600'
          src={imageId}
          sizes='100vw'
          alt='Description of my image'
        />
      )}
    </main>
  );
}
