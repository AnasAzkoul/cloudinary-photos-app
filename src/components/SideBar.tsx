import React from 'react';
import ButtonWithIcon from './ButtonWithIcon';
import Icons from './icons';

const SideBar = () => {
  return (
    <div className={'pb-12 w-1/4'}>
      <div className='space-y-4 py-4'>
        <div className='px-3 py-2'>
          <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>
            Manage
          </h2>
          <div className='space-y-1'>
            <ButtonWithIcon
              variant='secondary'
              className='w-full justify-start'
            >
              <Icons.GalleryIcon />
              Gallery
            </ButtonWithIcon>
            <ButtonWithIcon
              variant='ghost'
              className='w-full justify-start'
            >
              <Icons.AlbumIcon />
              Albums
            </ButtonWithIcon>
            <ButtonWithIcon
              variant='ghost'
              className='w-full justify-start'
            >
              <Icons.FavoriteIcon />
              Favorites
            </ButtonWithIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
