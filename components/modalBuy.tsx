import React from 'react';
import Modal from './modal';
import ModalContents from './modalContents';

interface Props {
  isOpen: boolean;
  close: () => void;
}

const ModalBuy: React.FC<Props> = ({ isOpen, close }) => {
  return (
    <Modal isOpen={isOpen}>
      <ModalContents
        close={close}
        headerImage={'assets/imgs/modals/buy/header.png'}
        sideBarImage={'assets/imgs/modals/buy/sidebar.png'}
        bottomThumbImage={'assets/imgs/modals/buy/bottom-thumb.png'}
        bottomImage={'assets/imgs/modals/buy/bottom.png'}
        exitImage={'assets/imgs/modals/buy/exit.png'}
      >
        <img src={'assets/imgs/modals/buy/bg.jpg'} />
        <div className='img-container'>
          <div className='img-wrapper img-wrapper--buy'>
            <img className='img-off' src={'assets/imgs/modals/buy/buy-off.jpg'} />
            <img className='img-on' src={'assets/imgs/modals/buy/buy-on.jpg'} />
          </div>
          <div className='img-wrapper img-wrapper--payment'>
            <img className='img-off' src={'assets/imgs/modals/buy/payment-off.jpg'} />
            <img className='img-on' src={'assets/imgs/modals/buy/payment-on.jpg'} />
          </div>
          <div className='img-wrapper img-wrapper--stamp'>
            <img className='img-off spin' src={'assets/imgs/modals/buy/stamp.png'} />
          </div>
        </div>
      </ModalContents>

      <style jsx>{`
        .img-container {
          position: absolute;
          top: 0;
          left: 0;
        }
        .img-wrapper {
          position: absolute;
          cursor: pointer;
        }
        .img-wrapper--buy { top: 745px; left: 922px; }
        .img-wrapper--payment { top: 450px; left: 834px; }
        .img-wrapper--stamp { top: 732px; left: 220px; }

        .img-on {
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          transition: opacity 0.3s ease;
          z-index: 10;
        }
        .img-wrapper:hover .img-on {
          opacity: 1;
        }
        .spin {
          animation: spin 2s ease-in-out infinite;
        }
        @keyframes spin {
          25% { transform: rotate(10deg); }
          50% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
      `}
      </style>
    </Modal>
  )
};

export default ModalBuy;
