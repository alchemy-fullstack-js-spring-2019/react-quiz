import React from 'react';
import TextSelector from '../components/TextSelector';
import ColorSelector from '../components/ColorSelector';
import Shape from '../components/Shape';

export default function NameTag() {
  return (
    <>
      <TextSelector />
      <ColorSelector />
      <Shape />
    </>
  );
}
