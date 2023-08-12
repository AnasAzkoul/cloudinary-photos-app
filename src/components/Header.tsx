import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='border-b'>
      <div className='flex h-16 items-center px-4 container mx-auto'>
        Photos App
        <div className='ml-auto flex items-center space-x-4'>
          <Avatar>
            <AvatarImage src='https://avatars.githubusercontent.com/u/87540366?v=4' />
            <AvatarFallback>AA</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}

export default Header
