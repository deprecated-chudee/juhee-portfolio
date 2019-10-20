import React from 'react';

const Scene3: React.FC = () => {
  return (
    <main className='Scene3'>
      <img className='overlay' src='/assets/imgs/in/음료냉장고/딸기우유.png' />
      <img className='overlay' src='/assets/imgs/in/음료냉장고/문.png' />
      <img className='overlay' src='/assets/imgs/in/음료냉장고/사이다.png' />
      <img className='overlay' src='/assets/imgs/in/음료냉장고/삼다수3.png' />
      <img className='overlay' src='/assets/imgs/in/음료냉장고/삼다수-2.png' />
      <img className='overlay' src='/assets/imgs/in/음료냉장고/콜라.png' />
      <img className='overlay' src='/assets/imgs/in/음료냉장고/파란우유.png' />
      <img className='overlay' src='/assets/imgs/in/음료냉장고/음료냉장고 문만.png' />
      <img className='overlay' src='/assets/imgs/in/매대/국대떡볶이.png' />
      <img className='overlay' src='/assets/imgs/in/매대/네모니.png' />
      <img className='overlay' src='/assets/imgs/in/매대/단팥빵.png' />
      <img className='overlay' src='/assets/imgs/in/매대/둥굴림.png' />
      <img className='overlay' src='/assets/imgs/in/매대/크림빵.png' />
      <img className='overlay' src='/assets/imgs/in/매대/티비스켓.png' />
      
      <style jsx>{`
        .Scene3 {
          display: block;
          position: fixed;
          width: 100%;
          height: 100%;
          background-image: url('/assets/imgs/in/background.png');
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
        }
        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          z-index: 1;
        }
      `}

      </style>
    </main>
  )
};
      
export default Scene3;
