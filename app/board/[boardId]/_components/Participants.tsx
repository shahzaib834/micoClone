import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const Participants = () => {
  return (
    <div className='absolute h-12 top-2 right-2 bg-white p-3 rounded-md flex items-center shadow-md'>
      TODO:List of Users
    </div>
  );
};

export const ParticipantsSkeleton = function ParticipantsSkeleton() {
  return (
    <div className='absolute h-12 top-2 right-2 bg-white p-3 rounded-md flex items-center shadow-md w-[150px]' />
  );
};

export default Participants;
