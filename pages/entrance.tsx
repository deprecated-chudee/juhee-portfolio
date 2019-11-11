import React, { useState } from 'react';

import ModalScroll from '../components/modalScroll';

const Entrance: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <div className='Entrance' style={open ? {opacity: 0, visibility: 'hidden'}: {}}>
        <img className='img img--gnb' src='assets/imgs/out/gnb.png' />
        <img className='bg' src='/assets/imgs/out/background.png' />
        <div className='img-container'>
          <img className='img img--game' src='assets/imgs/out/game/game.png' />
          <div className='game-video'>
            <video autoPlay loop muted>
              <source src='assets/imgs/out/game/video.mp4' type='video/mp4'/>
            </video>
          </div>

          <img className='img img--door' src='assets/imgs/out/door/door.png' onClick={() => setOpen(true)}/>
          <img className='img img--signpost' src='assets/imgs/out/door/signpost.png' />
          <img className='img img--grandma' src='assets/imgs/out/grandma/grandma-1.png' />
          <img className='img img--grandma' src='assets/imgs/out/grandma/grandma-2.png' />
          <img className='img img--grandma' src='assets/imgs/out/grandma/grandma-3.png' />
          <img className='img img--grandma' src='assets/imgs/out/grandma/grandma-4.png' />
          <img className='img img--grandma' src='assets/imgs/out/grandma/grandma-5.png' />
          <img className='img img--left-talk' src='assets/imgs/out/grandma/talk-1.png' />
          <img className='img img--right-talk' src='assets/imgs/out/grandma/talk-2.png' />
          <img className='img img--girl' src='assets/imgs/out/girl/girl-1.png' />
          <img className='img img--girl' src='assets/imgs/out/girl/girl-2.png' />
          <img className='img img--girl' src='assets/imgs/out/girl/girl-3.png' />
          <img className='img img--girl-talk' src='assets/imgs/out/girl/talk.png' />
          <img className='img img--left-tree' src='assets/imgs/out/tree/left-tree.png' />
          <img className='img img--right-tree' src='assets/imgs/out/tree/right-tree.png' />
        </div>
      </div>

      <ModalScroll isOpen={open} bgImage={'/assets/imgs/out/background@2x.jpg'} nextPage={'/shop'} nextScrollTop={1200}>
        <img className='scroll' src='assets/imgs/out/scroll.png'/>
      </ModalScroll>

      <style jsx>{`
        .Entrance {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
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
        .img--gnb { top: 0; left: 0; }
        .img--left-tree { top: -142px; left: -185px; z-index: 0; }
        .img--right-tree { top: -73px; left: 1337px; z-index: 0; }
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
          transform: translateX(-50%);
        }
      `}
      </style>
    </main>
  );
};

export default Entrance;
