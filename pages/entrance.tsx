import React, { useState } from 'react';

import ModalScroll from '../components/modalScroll';

const Entrance: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <div className='Entrance' style={open ? {opacity: 0, visibility: 'hidden'}: {}}>
        <button onClick={() => setOpen(true)}>click</button>
      </div>

      <ModalScroll isOpen={open} bgImage={'/assets/imgs/out/background@2x.jpg'} nextPage={'/shop'} nextScrollTop={1200} />

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
          background-image: url('/assets/imgs/out/background.png');
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
      `}
      </style>
    </main>
  );
};

export default Entrance;
