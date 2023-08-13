import React from 'react';
import UploadButton from './UploadButton';
import cloudinary from 'cloudinary';
import CloudinaryImage from './Cloudinary-image';

interface ResultsTypes {
  public_id: string;
}

const GalleryPage = async () => {
  const results = (await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('created_at', 'desc')
    .max_results(30)
    .execute()) as { resources: ResultsTypes[] };

  return (
    <section>
      <div className='flex flex-col'>
        <div className='flex justify-between pb-10'>
          <h1 className='text-4xl font-bold uppercase'>Gallery</h1>
          <UploadButton />
        </div>
        <div className='grid grid-cols-4 gap-2'>
          {results.resources.map((result) => {
            return (
              <CloudinaryImage
                key={result.public_id}
                src={result.public_id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
