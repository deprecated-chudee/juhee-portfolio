import React, { useState } from 'react';

import ModalScroll from '../components/modalScroll';

const Entrance: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <div className='Entrance' style={open ? {opacity: 0, visibility: 'hidden'}: {}}>
        <div className='wrapper'>
          <img className='bg' src='/assets/imgs/out/background.png' />
          <div className='img-container'>
            <img className='img img--game' src='assets/imgs/out/game/game.png' />
            <div className='game-video'>
              <video autoPlay loop muted>
                <source src='assets/imgs/out/game/video.mp4' type='video/mp4'/>
              </video>
            </div>

            <img className='img' src='assets/imgs/out/gnb.png' />
            <img className='img img--door door' src='assets/imgs/out/door/door.png' onClick={() => setOpen(true)}/>
            <img className='img img--signpost signpost' src='assets/imgs/out/door/signpost.png' />
            <img className='img img--grandma grandma1' src='assets/imgs/out/grandma/grandma-1.png' />
            <img className='img img--grandma grandma2' src='assets/imgs/out/grandma/grandma-2.png' />
            <img className='img img--grandma grandma3' src='assets/imgs/out/grandma/grandma-3.png' />
            <img className='img img--grandma grandma4' src='assets/imgs/out/grandma/grandma-4.png' />
            <img className='img img--grandma grandma5' src='assets/imgs/out/grandma/grandma-5.png' />
            <img className='img img--left-talk grandma6' src='assets/imgs/out/grandma/talk-1.png' />
            <img className='img img--right-talk grandma7' src='assets/imgs/out/grandma/talk-2.png' />
            <img className='img img--girl girl1' src='assets/imgs/out/girl/girl-1.png' />
            <img className='img img--girl girl2' src='assets/imgs/out/girl/girl-2.png' />
            <img className='img img--girl girl3' src='assets/imgs/out/girl/girl-3.png' />
            <img className='img img--girl-talk girl4' src='assets/imgs/out/girl/talk.png' />
            <img className='img img--left-tree left-tree' src='assets/imgs/out/tree/left-tree.png' />
            <img className='img img--right-tree right-tree' src='assets/imgs/out/tree/right-tree.png' />
          </div>
        </div>
      </div>

      <ModalScroll isOpen={open} bgImage={'/assets/imgs/out/background@2x.jpg'} nextPage={'/shop'} nextScrollTop={1200}>
        <img className='scroll' src='assets/imgs/out/scroll.png'/>
      </ModalScroll>

      <style jsx>{`
        .Entrance {
          position: relative;
          width: 100%;
          height: 100vh;
          min-width: 1920px;
          min-height: 980px;
          background-color: #7dcbfd;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 1;
          visibility: visible;
          transition: opacity 0.5s ease, visibility 0.4s ease;
          z-index: 0;
        }
        .wrapper {
          position: absolute;
          width: 1920px;
          height: 980px;
        }
        .bg { z-index: 1; }
        .img-container {
          position: absolute;
          top: 0;
          left: 0;
        }

        .game-video {
          position: absolute;
          top: 718px;
          left: 1459px;
          width: 81px;
          height: 55px;
          z-index: 1;
        }
        .game-video video {
          width: 100%;
          height: 100%;
        }

        .img { position: absolute; z-index: 1; }
        .img--left-tree { top: -142px; left: -185px; z-index: -5; }
        .img--right-tree { top: -73px; left: 1337px; z-index: -5; }
        .img--girl { top: 628px; left: 497px; }
        .img--girl-talk { top: 522px; left: 346px; }
        .img--grandma { top: 666px; left: 1199px; }
        .img--left-talk { top: 647px; left: 1100px; }
        .img--right-talk { top: 568px; left: 1302px; }
        .img--signpost { top: 561px; left: 1126px; }
        .img--game { top: 682px; left: 1426px; }
        .img--door {
          top: 487px;
          left: 953px;
          cursor: pointer;
        }
        .scroll {
          position: fixed;
          width: 264px;
          left: 50%;
          top: 1220px;
          animation: scroll 1s ease-in-out infinite alternate;
        }
        @keyframes scroll {
          0% { transform: translate(-50%, 0); }
          100% { transform: translate(-50%, 50px); }
        }

        .left-tree {
          animation: left-tree 2s ease-in-out infinite alternate;
          transform-origin: center left;
        }
        @keyframes left-tree {
          0% { transform: rotate(2deg); }
          100% { transform: rotate(-1deg); }
        }

        .right-tree {
          animation: right-tree 1.5s ease-in-out infinite alternate;
          transform-origin: center right;
        }
        @keyframes right-tree {
          0% { transform: rotate(1deg); }
          100% { transform: rotate(-1deg); }
        }

        .door {
          animation: door 4s ease-in-out infinite;
        }
        @keyframes door {
          0% { transform: translateX(0); }
          35% { transform: translateX(30px); }
          50% { transform: translateX(30px); }
          85% { transform: translateX(0); }
          100% { transform: translateX(0); }
        }

        .girl1 { animation: girl 3s infinite step-end; }
        .girl2 { animation: girl 3s 1s infinite step-end; opacity: 0; }
        .girl3 { animation: girl 3s 2s infinite step-end; opacity: 0; }
        .girl4 { animation: fadeIn 3s step-end; }
        @keyframes girl {
          0% { opacity: 1; }
          33.3% { opacity: 1; }
          33.4% { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        .grandma1 { animation: grandma 5s infinite step-end; }
        .grandma2 { animation: grandma 5s 1s infinite step-end; opacity: 0; }
        .grandma3 { animation: grandma 5s 2s infinite step-end; opacity: 0; }
        .grandma4 { animation: grandma 5s 3s infinite step-end; opacity: 0; }
        .grandma5 { animation: grandma 5s 4s infinite step-end; opacity: 0; }
        .grandma6 { animation: fadeIn 4s step-end; }
        .grandma7 { animation: fadeIn 5s step-end; }
        @keyframes grandma {
          0% { opacity: 1; }
          20% { opacity: 1; }
          20.1% { opacity: 0; }
          100% { opacity: 0; }
        }

        .signpost {
          animation: signpost 1s ease-in-out infinite alternate;
          transform-origin: top center;
        }
        @keyframes signpost {
          0% { transform: rotate(5deg); }
          100% { transform: rotate(-5deg); }
        }
      `}
      </style>
    </main>
  );
};

export default Entrance;
