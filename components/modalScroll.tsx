import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router';

import ModalFull from './modalFull';

const PERSPECTIVE = -1960;
const DIVSION = 15;

interface Props {
  isOpen: boolean;
  bgImage: string;
  modalBg?: string;
  nextPage: string;
  nextScrollTop: number;
  children?: React.ReactNode;
}

const ModalScroll: React.FC<Props> =  ({ isOpen, bgImage, modalBg, nextPage, nextScrollTop, children }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const ref: React.Ref<HTMLDivElement> = useRef(null);
  const router = useRouter();

  // Component Did Mount
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler, true);

    // Component Did Unmount
    return () => {
      document.removeEventListener('scroll', scrollHandler, true);
    };
  }, []);

  // Component Did Update
  useEffect(() => {
    if (ref.current) {
      ref.current.setAttribute(
        'style',
        `transform: translate3d(0, ${scrollTop / DIVSION}px, ${PERSPECTIVE + scrollTop}px)`
      );
    }

    if(scrollTop >= nextScrollTop) {
      router.push(nextPage);
      return;
    }
  }, [scrollTop]);

  const scrollHandler = () => {
    if (document.scrollingElement) {
      setScrollTop(document.scrollingElement.scrollTop);
    }
  };

  return (
    <ModalFull isOpen={isOpen}>
      {modalBg && <img src={modalBg} className='modalBg' />}
      <div className='modal scroll'>
        <article ref={ref} className='wrapper'>
          <div className='background'/>
          {children}
        </article>
      </div>

      <style jsx>{`
        .modal {
          z-index: 10000;
        }
        .modalBg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .scroll {
          position: fixed;
          width: 1920px;
          height: 980px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          perspective: 1960px;
          transition: all 10s;
        }
        .wrapper {
          width: 1920px;
          height: 980px;
          position: absolute;
          transform: translate3d(0, 0, -1960px);
          top: 0;
          left: 0;
          background-size: cover;
        }
        .background {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 3840px;
          height: 1960px;
          background-image: url(${bgImage});
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
        }
      `}</style>
    </ModalFull>
  )
};

export default ModalScroll;
