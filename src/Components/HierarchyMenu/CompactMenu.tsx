// SideMenu.tsx
import React from 'react';

interface CompactMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const CompactMenu: React.FC<CompactMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`side-menu absolute inset-y-0 left-0 w-16 bg-gray-200 flex flex-col justify-center items-center transition-transform ease-in-out duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-16'}`}>
      <button onClick={onClose}>&#9776;</button>
      {/* Add other buttons and menu items here */}
    </div>
  );
};

export default CompactMenu;

