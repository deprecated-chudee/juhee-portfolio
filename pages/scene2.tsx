import React from 'react';

const Scene2: React.FC = () => {
  return (
    <main className='Scene2'>
      <div className='background'/>

      <style jsx>{`
        .Scene2 {
          display: block;
          position: fixed;
          width: 100%;
          height: 100%;
          background-color: skyblue;
        }
        .layout {
          width: 100%;
          height: 100%;
        }
        .background {
          width: 100%;
          height: 100%;
          background-image: url('/assets/imgs/out/door/out04door1.png');
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
        }
      `}
      </style>
    </main>
  );
};

export default Scene2;
