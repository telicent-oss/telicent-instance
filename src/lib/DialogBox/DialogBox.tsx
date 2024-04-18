import React, { FC } from 'react'

interface DialogBoxProps {
  title: string
  onClose: () => void
  children: React.ReactNode
}
export const DialogBox: FC<DialogBoxProps> = ({ onClose, children, title }) => {
  return (
    <>
      <div className="absolute top-0 left-0 h-full w-full z-40 bg-black-100 opacity-80" onClick={onClose}></div>
      <div className="bg-black-100 z-50 absolute top-24 left-1/2 transform -translate-x-1/2 py-3 px-6  rounded border-black-400 shadow-black-300 shadow-md border" >
        <h2 className='text-left pb-6'>{title}</h2>
        {children}
      </div>
    </>
  )
}
