import React from 'react';
import NewButton from './NewButton';
import List from './List';

const Sidebar = () => {
  return (
    <aside className='fixed z-[1] left-0 w-[60px] h-full bg-blue-950 flex p-3 flex-col gap-y-4 text-white'>
      <List />
      <NewButton />
    </aside>
  );
};

export default Sidebar;
