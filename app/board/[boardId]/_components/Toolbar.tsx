import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const Toolbar = () => {
  return (
    <div className='absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4'>
      <div className='bg-white rounded-md p-1.5 flex flex-col items-center shadow-md gap-y-1'>
        <div>Pencil</div>
        <div>Square</div>
        <div>Circle</div>
        <div>Ellipsis</div>
        <div className='bg-white rounded-md p-1.5 flex flex-col items-center shadow-md'>
          <div>Undo</div>
          <div>Redo</div>
        </div>
      </div>
    </div>
  );
};

export const ToolbarSkeleton = function ToolbarSkeleton() {
  return (
    <div className='absolute top-[50%] -translate-y-[50%] shadow-md rounded-md left-2 flex flex-col gap-y-4 bg-white h-[360px] w-[52px]' />
  );
};

export default Toolbar;
