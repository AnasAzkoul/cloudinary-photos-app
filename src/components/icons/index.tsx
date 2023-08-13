import React from 'react';
import GalleryIcon from './GalleryIcon';
import AlbumsIcon from './AlbumsIcon';
import FavoriteIcon from './FavoriteIcon';
import FavoriteSolidIcon from './FavoriteSolidIcon';

type Props = {}

const Icons = (props: Props) => {
  return (
    <div>Icons</div>
  )
}

Icons.GalleryIcon = GalleryIcon;
Icons.AlbumIcon = AlbumsIcon;
Icons.FavoriteIcon = FavoriteIcon;
Icons.FavoriteSolidIcon = FavoriteSolidIcon; 

export default Icons
