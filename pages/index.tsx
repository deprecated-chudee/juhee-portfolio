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
            <img className='img img--blind blind' src='assets/imgs/intro/items/blind.png' />
            <img className='img img--pencil pencil' src='assets/imgs/intro/items/pencil.png' />
            <img className='img img--eraser eraser' src='assets/imgs/intro/items/eraser.png' />
            <img className='img img--plant plant' src='assets/imgs/intro/items/plant.png' />
            <img className='img img--flowerpot' src='assets/imgs/intro/items/flowerpot.png' />
            <img className='img img--post-it-yellow post-it-yellow' src='assets/imgs/intro/items/post-it-yellow.png' />
            <img className='img img--post-it-blue post-it-blue' src='assets/imgs/intro/items/post-it-blue.png' />
            <img className='img img--key key' src='assets/imgs/intro/items/key.png' />

            <div className='clock-wrapper'>
              <img className='img clock' src='assets/imgs/intro/items/clock.jpg' />
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
          overflow: hidden;
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
          animation: scroll 1s ease-in-out infinite alternate;
        }
        @keyframes scroll {
          0% { transform: translate(-50%, -25px); }
          100% { transform: translate(-50%, 25px); }
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

        .clock {
          animation: clock 10s infinite step-end;
        }
        @keyframes clock {
          0%   { transform: translateX(-1px); }
          11%  { transform: translateX(-323px); }
          22%  { transform: translateX(-646px); }
          33%  { transform: translateX(-969px); }
          44%  { transform: translateX(-1292px); }
          55%  { transform: translateX(-1615px); }
          66%  { transform: translateX(-1938px); }
          77%  { transform: translateX(-2261px); }
          88%  { transform: translateX(-2584px); }
          100%  { transform: translateX(-2584px); }
        }

        .blind {
          animation: blind 5s ease-in-out infinite alternate;
        }
        @keyframes blind {
          0% { transform: translateY(0);  }
          100% { transform: translateY(-200px); }
        }

        .post-it-yellow {
          animation: post-it-yellow 2s ease-in-out 0.5s infinite alternate;
          transform-origin: top left;
        }
        @keyframes post-it-yellow {
          0% { transform: rotate(10deg); }
          100% { transform: rotate(-15deg); }
        }
        .post-it-blue {
          animation: post-it-blue 2s ease-in-out infinite alternate;
          transform-origin: top left;
        }
        @keyframes post-it-blue {
          0% { transform: rotate(20deg); }
          100% { transform: rotate(-10deg); }
        }

        .plant {
          animation: plant 2s ease-in-out infinite alternate;
          transform-origin: bottom center;
        }
         @keyframes plant {
          0% { transform: rotate(3deg); }
          100% { transform: rotate(-3deg); }
        }

        .key {
          animation: key 3s ease-in-out infinite alternate;
          transform-origin: top center;
        }
         @keyframes key {
          0% { transform: rotate(10deg); }
          100% { transform: rotate(-10deg); }
        }

        .pencil {
          animation: pencil 2s ease-in-out infinite alternate;
        }
         @keyframes pencil {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100px); }
        }

        .eraser {
          animation: eraser 2s ease-in-out infinite alternate;
        }
         @keyframes eraser {
          0% { transform: translateX(0); }
          100% { transform: translateX(100px); }
        }
      `}
      </style>
    </main>
  )
};

export default Index;
