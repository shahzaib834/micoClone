'use client';
import { useOthersConnectionIds } from '@/liveblocks.config';
import React, { memo } from 'react';
import Cursor from './Cursor';

const Cursors = () => {
  const ids = useOthersConnectionIds();

  return (
    <>
      {ids.map((connectionId) => {
        <Cursor key={connectionId} connectionId={connectionId} />;
      })}
    </>
  );
};

const CursorsPresence = memo(() => {
  return (
    <>
      <Cursors />
    </>
  );
});

CursorsPresence.displayName = 'CursorPresence';

export default CursorsPresence;
