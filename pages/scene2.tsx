import React from 'react';

const Scene2: React.FC = () => {
  return (
    <main className='Scene2'>
      <div className='background'/>

      <style jsx>{`
        .Scene2 {
          position: relative;
          width: 1920px;
          height: 980px;
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
