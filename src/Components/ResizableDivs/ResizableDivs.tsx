import React, { useState, useRef, useEffect, ReactNode } from 'react';
import ResizableDivider from './ResizableDivider';

interface ResizableDivsProps {
  children: ReactNode
}
const ResizableDivs: React.FC<ResizableDivsProps> = ({ children }) => {
  if (React.Children.count(children) !== 2) {
    throw new Error("ResizableDivs must have exactly two children")
  }

  const [left, right] = React.Children.toArray(children)
  const [isResizing, setIsResizing] = useState(false);
  const [div1Width, setDiv1Width] = useState<{ width: string }>({ width: '70%' });
  const [div2Width, setDiv2Width] = useState<{ width: string }>({ width: '30%' });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (isResizing && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const totalWidth = containerRect.width;
        const dividerPosition = e.clientX;
        const newWidth = (dividerPosition - containerRect.left) / totalWidth * 100;
        setDiv1Width({ width: `${newWidth}%` })
        setDiv2Width({ width: `${100 - (newWidth || 50)}%` })
      }
    }

    function handleMouseUp() {
      setIsResizing(false);
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  function handleMouseDown() {
    setIsResizing(true);
  }

  return (
    <div className="flex h-full py-1 w-full" ref={containerRef}>
      <div style={div1Width}>
        {left}
      </div>
      <ResizableDivider onMouseDown={handleMouseDown} />
      <div style={div2Width}>
        {right}
      </div>
    </div>
  );
};

export default ResizableDivs;

