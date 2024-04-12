import React from 'react';

const ResizableDivider: React.FC<{ onMouseDown: React.MouseEventHandler }> = ({ onMouseDown }) => {
  return (
    <div
      className="w-2 mx-1 cursor-ew-resize my-auto"
      onMouseDown={onMouseDown}
    >
      <div className='bg-gray-400 w-1 h-20 align-middle m-auto rounded' />
    </div>
  );
};

export default ResizableDivider;

