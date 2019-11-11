import React from 'react';
import Modal from './modal';
import ModalContents from "./modalContents";

interface Props {
  isOpen: boolean;
  close: () => void;
}

const ModalInstall: React.FC<Props> = ({ isOpen, close }) => {
  return (
    <Modal isOpen={isOpen}>
      <ModalContents
        isDimmer
        width={'1152px'}
        height={'758px'}
        close={close}
        headerImage={'assets/imgs/modals/install/header.png'}
        sideBarImage={'assets/imgs/modals/install/sidebar.png'}
        sideBarThumbImage={'assets/imgs/modals/install/sidebar-thumb.png'}
        bottomImage={'assets/imgs/modals/install/bottom.png'}
        exitImage={'assets/imgs/modals/install/exit.png'}
      >
        <img src={'assets/imgs/modals/install/bg.jpg'} />
        <div className='img-container'>
          <div className='img-wrapper img-wrapper--install-button'>
            <img className='img-off' src={'assets/imgs/modals/install/install-off.png'} />
            <img className='img-on' src={'assets/imgs/modals/install/install-on.png'} />
          </div>
          <div className='img-wrapper img-wrapper--remove-button'>
            <img className='img-off' src={'assets/imgs/modals/install/remove-off.png'} />
            <img className='img-on' src={'assets/imgs/modals/install/remove-on.png'} />
          </div>
          <a href='https://youtu.be/ktbpzqJOKZs' target='_blank'>
            <img className='play-button' src={'assets/imgs/modals/install/play.png'} />
          </a>
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
        .img-wrapper--install-button {  top: 395px; left: 130px; }
        .img-wrapper--remove-button { top: 780px; left: 70px; }
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
        .play-button {
          position: absolute;
          top: 590px;
          left: 720px;
          cursor: pointer;
        }
      `}
      </style>
    </Modal>
  )
};

export default ModalInstall;
