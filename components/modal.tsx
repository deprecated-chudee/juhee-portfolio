import React from 'react';

interface Props {
  isOpen: boolean;
  children: any;
}

const Modal: React.FC<Props> = ({ isOpen, children }) => {
  if (isOpen) {
    return (
      <div className='modal'>
        <div className='modal-header'></div>
        {children}
        <div>footer</div>

        <style jsx>{`
        .modal {
          position: fixed;
          width: 100%;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.7);
          overflow: hidden;
          z-index: 10000;
        }
        .modal-header {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 10;
          width: 100%;
          height: 45px;
        }
      `}
        </style>
      </div>
    )
  } else {
    return null;
  }
};

export default Modal;
