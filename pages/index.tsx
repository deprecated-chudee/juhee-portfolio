import React, { useState } from 'react';
import { NextPage } from 'next';

import ModalScroll from '../components/modalScroll';

const Index: NextPage<{}> = () => {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <div className='Intro' style={open ? {opacity: 0, visibility: 'hidden'}: {}}>
        <div className='wrapper'>
          <div className='img-container'>
            <img className='img img--blind' src='assets/imgs/intro/items/blind.png' />
            <img className='img img--pencil' src='assets/imgs/intro/items/pencil.png' />
            <img className='img img--eraser' src='assets/imgs/intro/items/eraser.png' />
            <img className='img img--plant' src='assets/imgs/intro/items/plant.png' />
            <img className='img img--flowerpot' src='assets/imgs/intro/items/flowerpot.png' />
            <img className='img img--post-it-yellow' src='assets/imgs/intro/items/post-it-yellow.png' />
            <img className='img img--post-it-blue' src='assets/imgs/intro/items/post-it-blue.png' />
            <img className='img img--key' src='assets/imgs/intro/items/key.png' />

            <div className='clock-wrapper'>
              <img className='img' src='assets/imgs/intro/items/clock.jpg' />
            </div>

            <div className='mouse-wrapper' onClick={() => setOpen(true)}>
              <img className='img-off mouse-move' src='/assets/imgs/intro/mouse/mouse01.png' alt="" />
              <img className='img-off' src='/assets/imgs/intro/mouse/mouse02.png' alt="" />
              <img className='img-on mouse-click-center' src='/assets/imgs/intro/mouse/click01.png' alt="" />
              <img className='img-on' src='/assets/imgs/intro/mouse/click02.png' alt="" />
            </div>
          </div>
        </div>
      </div>

      <ModalScroll isOpen={open} bgImage={'/assets/imgs/intro/background@2x.jpg'} nextPage={'/entrance'} nextScrollTop={2800}>
        <img className='scroll' src='assets/imgs/intro/scroll.png'/>
      </ModalScroll>

      <style jsx>{`
        .Intro {
          position: relative;
          width: 100%;
          height: 100vh;
          min-width: 1920px;
          min-height: 980px;
          background-image: url('/assets/imgs/intro/white-space@2x.jpg');
          background-repeat: no-repeat;
          background-size: cover;
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
          background-image: url('/assets/imgs/intro/bg@2x.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }
        .img-container {
          position: absolute;
          top: 0;
          left: 0;
        }

        .img { position: absolute; }
        .img--key { top: 278px; left: 1346px; }
        .img--pencil { top: 901px; left: 1689px; }
        .img--eraser { top: 834px; left: 116px; }
        .img--plant { top: 239px; left: 107px; }
        .img--flowerpot { top: 368px; left: 3px; }
        .img--post-it-yellow { top: 68px; left: 76px; }
        .img--post-it-blue { top: 497px; left: 574px; }
        .img--blind { top: 3px; left: 1485px; }
        .scroll {
          position: fixed;
          width: 200px;
          left: 50%;
          top: -350px;
          transform: translateX(-50%);
        }

        .clock-wrapper {
          position: absolute;
          width: 323px;
          height: 147px;
          top: 22px;
          left: 1090px;
          overflow: hidden;
        }

        .mouse-wrapper {
          position: absolute;
          width: 336px;
          height: 86px;
          top: 430px;
          left: 790px;
          cursor: pointer;
         }
        .mouse-wrapper:hover .img-on {
          opacity: 1;
        }
        .mouse-wrapper:hover .img-off {
          opacity: 0;
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

        @keyframes mouse {
          0% { transform: translate(110px, -15px); }
          100% { transform: translate(110px, -25px); }
        }
      `}
      </style>
    </main>
  )
};

export default Index;
