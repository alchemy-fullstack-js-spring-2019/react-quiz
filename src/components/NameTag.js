import React from 'react';
import ColorSelector from './ColorSelector';
import TextSelector from './TextSelector';
import Shape from './Shape';

export default function NameTag() {
  return (
    <>
      <TextSelector />
      <ColorSelector />
      <Shape />
    </>
  );
}
