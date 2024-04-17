// .tsx
import React, { useState, ReactNode } from 'react';
import SideMenu from './SideMenu';

interface Props {
  children: ReactNode;
}

const SideDrawer: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button className='absolute top-0 left-0 z-20' onClick={toggle}>Open</button>
      <SideMenu isOpen={isOpen} onClose={toggle} />
      <div className={`side-drawer absolute inset-y-0 left-0 w-1/6 bg-black-100 transform drop-shadow-xl shadow-black-500 transition-transform ease-in-out z-20 duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-64'}`}>
        <div className="side-drawer-content p-4">
          {children}
        </div>
      </div>
    </>
  );
};

export default SideDrawer;

