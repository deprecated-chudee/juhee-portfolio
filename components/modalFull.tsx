import React from 'react';

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ isOpen, children }) => {
  return (
    <>
      <div className='modal'style={isOpen ? {opacity: 1, visibility: 'visible', height: '4000px'} : {}}>
        {children}
      </div>

      <style jsx>{`
      .modal {
        display: block;
        position: absolute;
        width: 100%;
        height: 0;
        overflow: auto;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s ease, visibility 0.4s ease;
      }
    `}
      </style>
    </>
  )
};

export default Modal;
