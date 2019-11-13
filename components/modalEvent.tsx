import React, { useState } from 'react';
import Modal from './modal';
import ModalContents from './modalContents';

interface Props {
  isOpen: boolean;
  close: () => void;
}

const ModalEvent: React.FC<Props> = ({ isOpen, close }) => {
  const [spin, setSpin] = useState('');

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
          <div className='img-wrapper img-wrapper--tibi' onClick={() => setSpin('tibi')}>
            <img className={spin === 'tibi' ? 'img-spin-off spin' : 'img-spin-off'} src={'assets/imgs/modals/event/tibi.png'} />
            <img className={spin === 'tibi' ? 'img-spin-on spin' : 'img-spin-on'} src={'assets/imgs/modals/event/hover.png'} />
          </div>
          <div className='img-wrapper img-wrapper--nemo' onClick={() => setSpin('nemo')}>
            <img className={spin === 'nemo' ? 'img-spin-off spin' : 'img-spin-off'}  src={'assets/imgs/modals/event/nemo.png'} />
            <img className={spin === 'nemo' ? 'img-spin-on spin' : 'img-spin-on'} src={'assets/imgs/modals/event/hover.png'} />
          </div>
          <div className='img-wrapper img-wrapper--doong' onClick={() => setSpin('doong')}>
            <img className={spin === 'doong' ? 'img-spin-off spin' : 'img-spin-off'}  src={'assets/imgs/modals/event/doong.png'} />
            <img className={spin === 'doong' ? 'img-spin-on spin' : 'img-spin-on'} src={'assets/imgs/modals/event/hover.png'} />
          </div>
          <div className='img-wrapper img-wrapper--dduck' onClick={() => setSpin('dduck')}>
            <img className={spin === 'dduck' ? 'img-spin-off spin' : 'img-spin-off'}  src={'assets/imgs/modals/event/dduck.png'} />
            <img className={spin === 'dduck' ? 'img-spin-on spin' : 'img-spin-on'} src={'assets/imgs/modals/event/hover.png'} />
          </div>
          <div className='img-wrapper img-wrapper--cream-bread' onClick={() => setSpin('cream')}>
            <img className={spin === 'cream' ? 'img-spin-off spin' : 'img-spin-off'}  src={'assets/imgs/modals/event/cream-bread.png'} />
            <img className={spin === 'cream' ? 'img-spin-on spin' : 'img-spin-on'} src={'assets/imgs/modals/event/hover.png'} />
          </div>
          <div className='img-wrapper img-wrapper--red-bean-bread' onClick={() => setSpin('redbean')}>
            <img className={spin === 'redbean' ? 'img-spin-off spin' : 'img-spin-off'}  src={'assets/imgs/modals/event/red-bean-bread.png'} />
            <img className={spin === 'redbean' ? 'img-spin-on spin' : 'img-spin-on'} src={'assets/imgs/modals/event/hover.png'} />
          </div>
          <div className='img-wrapper img-wrapper--hover img-wrapper--submit-button'>
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
        .spin {
          opacity: 1;
          transform: rotate3d(0, 1, 0, 360deg);
        }
        .img-wrapper--hover:hover .img-on {
          opacity: 1;
        }
      `}
      </style>
    </Modal>
  )
};

export default ModalEvent;
