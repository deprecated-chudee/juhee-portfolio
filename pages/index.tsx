import React, { useState } from 'react';
import { NextPage } from 'next';

import ModalScroll from '../components/modalScroll';

const Index: NextPage<{}> = () => {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <div className='Intro' style={open ? {opacity: 0, visibility: 'hidden'}: {}}>
        <div className='wrapper'>
          <div className='mouse-container'>
            <div className='img-wrapper img-wrapper--mouse' onClick={() => setOpen(true)}>
              <img className='img-off mouse-move' src='/assets/imgs/intro/mouse01.png' alt="" />
              <img className='img-off' src='/assets/imgs/intro/mouse02.png' alt="" />
              <img className='img-on mouse-click-center' src='/assets/imgs/intro/click01.png' alt="" />
              <img className='img-on' src='/assets/imgs/intro/click02.png' alt="" />
            </div>
          </div>
        </div>

        <style jsx>{`
        .Intro {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100vh;
          min-width: 1920px;
          min-height: 980px;
          background-image: url('/assets/imgs/in/bg.jpg');
          background-repeat: no-repeat;
          background-size: auto;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 1;
          visibility: visible;
          transition: opacity 0.5s ease, visibility 0.4s ease;
        }
        .wrapper {
          position: absolute;
          width: 1920px;
          height: 980px;
          background-image: url('/assets/imgs/intro/background.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }
        .mouse-move {
          animation: mouse infinite 1s alternate linear;
        }
        .mouse-move-center {
          transform: translate(110px, -20px);
        }
        .mouse-click {
          position: absolute;
          top: -22px;
          display: none;
          cursor: pointer;
        }
        .mouse-click-center {
          transform: translate(120px, -30px);
        }
        @keyframes mouse {
          0% { transform: translate(110px, -15px); }
          100% { transform: translate(110px, -25px); }
        }

        .img-container {
          position: absolute;
          top: 0;
          left: 0;
        }
        .img-wrapper {
          position: absolute;
          cursor: pointer;
        }
        .img-wrapper--mouse {
          width: 336px;
          height: 86px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
         }
        .img-on {
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 10;
          transition: opacity 0.3s ease;
        }
        .img-off {
          transition: opacity 0.2s ease;
        }
        .img-wrapper:hover .img-on {
          opacity: 1;
        }
        .img-wrapper:hover .img-off {
          opacity: 0;
        }
      `}
        </style>
      </div>

      <ModalScroll isOpen={open} bgImage={'/assets/imgs/intro/background@2x.jpg'} nextPage={'/entrance'} nextScrollTop={2800} />
    </main>
  )
};

export default Index;
