import React from 'react';
import Modal from './modal';
import ModalContents from "./modalContents";

interface Props {
  isOpen: boolean;
  close: () => void;
}

const ModalEvent: React.FC<Props> = ({ isOpen, close }) => {
  return (
    <Modal isOpen={isOpen}>
      <ModalContents
        isDimmer
        width={'1152px'}
        height={'758px'}
        close={close}
        headerImage={'assets/imgs/modals/event/header.png'}
        sideBarImage={'assets/imgs/modals/event/sidebar.png'}
        sideBarThumbImage={'assets/imgs/modals/event/sidebar-thumb.png'}
        bottomImage={'assets/imgs/modals/event/bottom.png'}
        exitImage={'assets/imgs/modals/event/exit.png'}
      >
        <img src={'assets/imgs/modals/event/bg.jpg'} />
        <div className='img-container'>
          <div className='img-wrapper img-wrapper--tibi'>
            <img className='img-spin-off' src={'assets/imgs/modals/event/tibi.png'} />
            <img className='img-spin-on' src={'assets/imgs/modals/event/hover.png'} />
          </div>
          <div className='img-wrapper img-wrapper--nemo'>
            <img className='img-spin-off' src={'assets/imgs/modals/event/nemo.png'} />
            <img className='img-spin-on' src={'assets/imgs/modals/event/hover.png'} />
          </div>
          <div className='img-wrapper img-wrapper--doong'>
            <img className='img-spin-off' src={'assets/imgs/modals/event/doong.png'} />
            <img className='img-spin-on' src={'assets/imgs/modals/event/hover.png'} />
          </div>
          <div className='img-wrapper img-wrapper--dduck'>
            <img className='img-spin-off' src={'assets/imgs/modals/event/dduck.png'} />
            <img className='img-spin-on' src={'assets/imgs/modals/event/hover.png'} />
          </div>
          <div className='img-wrapper img-wrapper--cream-bread'>
            <img className='img-spin-off' src={'assets/imgs/modals/event/cream-bread.png'} />
            <img className='img-spin-on' src={'assets/imgs/modals/event/hover.png'} />
          </div>
          <div className='img-wrapper img-wrapper--red-bean-bread'>
            <img className='img-spin-off' src={'assets/imgs/modals/event/red-bean-bread.png'} />
            <img className='img-spin-on' src={'assets/imgs/modals/event/hover.png'} />
          </div>
          <div className='img-wrapper img-wrapper--submit-button'>
            <img className='img-off' src={'assets/imgs/modals/event/submit-off.png'} />
            <img className='img-on' src={'assets/imgs/modals/event/submit-on.png'} />
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
        .img-wrapper--tibi { top: 1306px; left: 247px; }
        .img-wrapper--nemo { top: 1306px; left: 477px; }
        .img-wrapper--doong { top: 1306px; left: 707px; }
        .img-wrapper--dduck { top: 1571px; left: 247px; }
        .img-wrapper--cream-bread { top: 1571px; left: 477px; }
        .img-wrapper--red-bean-bread { top: 1571px; left: 707px; }
        .img-wrapper--submit-button { top: 1904px; left: 463px; }

        .img-spin-on, .img-spin-off {
          transform: rotate3d(0, 1, 0, 0);
          transition: transform 1s ease, opacity 0.7s ease;
          transform-origin: center center;
        }
        .img-spin-on {
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 99;
        }
        .img-on {
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          transition: opacity 0.3s ease;
          z-index: 10;
        }
        .img-wrapper:hover .img-spin-on {
          opacity: 1;
          transform: rotate3d(0, 1, 0, 360deg);
        }
        .img-wrapper:hover .img-spin-off {
          transform: rotate3d(0, 1, 0, 360deg);
        }
        .img-wrapper:hover .img-on {
          opacity: 1;
        }
      `}
      </style>
    </Modal>
  )
};

export default ModalEvent;
