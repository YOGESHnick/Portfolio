import React from 'react';

export default function Togglebutton({setOpen }) {
  return (
    <button onClick={ ()=> setOpen( (prev)=> !prev ) } >
      button
    </button>
  );
}
