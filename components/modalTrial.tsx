import React from 'react';
import Modal from './modal';
import ModalContents from "./modalContents";

interface Props {
  isOpen: boolean;
  close: () => void;
}

const ModalTrial: React.FC<Props> = ({ isOpen, close }) => {
  return (
    <Modal isOpen={isOpen}>
      <ModalContents
        isDimmer
        width={'1152px'}
        height={'758px'}
        close={close}
        headerImage={'assets/imgs/modals/trial/header.png'}
        sideBarImage={'assets/imgs/modals/event/sidebar.png'}
        sideBarThumbImage={'assets/imgs/modals/event/sidebar-thumb.png'}
        bottomImage={'assets/imgs/modals/event/bottom.png'}
        exitImage={'assets/imgs/modals/event/exit.png'}
      >
        <img src={'assets/imgs/modals/trial/bg.jpg'}/>
        <div className='img-container'>
          <div className='img-wrapper img-wrapper--trial-button'>
            <img className='img-off' src={'assets/imgs/modals/trial/trial-off.png'} />
            <img className='img-on' src={'assets/imgs/modals/trial/trial-on.png'} />
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
        .img-wrapper--trial-button { top: 480px; left: 407px; }
        .img-on {
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 10;
          transition: opacity 0.3s ease;
        }
        .img-wrapper:hover .img-on {
          opacity: 1;
        }
      `}
      </style>
    </Modal>
  )
};

export default ModalTrial;
