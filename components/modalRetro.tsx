import React from 'react';
import Modal from './modal';
import ModalContents from "./modalContents";

interface Props {
  isOpen: boolean;
  close: () => void;
}

const ModalRetro: React.FC<Props> = ({ isOpen, close }) => {
  return (
    <Modal isOpen={isOpen}>
      <ModalContents
        close={close}
        headerImage={'assets/imgs/modals/retro/header.png'}
        sideBarImage={'assets/imgs/modals/buy/sidebar.png'}
        bottomThumbImage={'assets/imgs/modals/buy/bottom-thumb.png'}
        bottomImage={'assets/imgs/modals/buy/bottom.png'}
        exitImage={'assets/imgs/modals/buy/exit.png'}
      >
        <img src={'assets/imgs/modals/retro/bg.jpg'} />
      </ModalContents>
    </Modal>
  )
};

export default ModalRetro;
