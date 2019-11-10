import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Index: NextPage<{}> = () => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    router.push('/scene1');
  };

  return (
    <main className='intro'>
      <div className='mouse-container'>
        <div>
          <img className='mouse mouse-move-center mouse-move' src='/assets/imgs/intro/mouse01.png' alt="" />
          <img className='mouse' src='/assets/imgs/intro/mouse02.png' alt="" />
        </div>
        <div className="mouse-click" onClick={handleClick}>
          <img className='mouse mouse-click-center' src='/assets/imgs/intro/click01.png' alt="" />
          <img className='mouse' src='/assets/imgs/intro/click02.png' alt="" />
        </div>
      </div>


      <style jsx>{`
        .intro {
          display: block;
          position: fixed;
          width: 100%;
          height: 100%;
          background-image: url('/assets/imgs/intro/background.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }
        .mouse-container {
          position: absolute;
          width: 336px;
          height: 86px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        .mouse-container:hover > div:nth-child(1) {
          display: none;
        }
        .mouse-container:hover > div:nth-child(2) {
          display: block;
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
          transform: translate(120px, -15px);
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
