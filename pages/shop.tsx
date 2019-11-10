import React, { useEffect, useState } from 'react';

import ModalRetro from '../components/modalRetro';
import ModalBuy from '../components/modalBuy';
import ModalTrial from '../components/modalTrial';
import ModalEvent from '../components/modalEvent';
import ModalInstall from '../components/modalInstall';

const Shop: React.FC = () => {
  const [modal, setModal] = useState('');
  const [coachmark, setCoachmark] = useState(true);

  useEffect(() => {
    const imgs: NodeListOf<HTMLImageElement> = document.querySelectorAll('img.mouseover');

    imgs.forEach(img => {
      img.addEventListener('mouseover', mouseOverHandler, true);
      img.addEventListener('mouseout', mouseOutHandler, true);
    });

    return () => {
      imgs.forEach(img => {
        img.removeEventListener('mouseover', mouseOverHandler, true);
        img.removeEventListener('mouseout', mouseOutHandler, true);
      });
    }
  }, []);

  const handleClick = () => {
    setCoachmark(false);
  };

  const mouseOverHandler = (e: MouseEvent) => {
    const img = e.target as HTMLImageElement;

    img.style.zIndex = '1';
    img.setAttribute('data-src', img.src);
    img.setAttribute('src', img.dataset['mouseover']!);
  };

  const mouseOutHandler = (e: MouseEvent) => {
    const img = e.target as HTMLImageElement;

    img.style.zIndex = '0';
    img.setAttribute('data-mouseover', img.src);
    img.setAttribute('src', img.dataset['src']!);
  };

  const doorMouseOverHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLDivElement;
    const move = target.dataset['left'] ? '220px' : '-220px';
    const door = target.childNodes[0] as HTMLImageElement;
    door.style.transform = `translateX(${move})`;
  };

  const doorMouseOutHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLImageElement;
    const door = target.childNodes[0] as HTMLImageElement;
    door.style.transform = 'translateX(0)';
  };

  const clickHandler = (name: string) => {
    document.body.style.overflow = 'hidden';
    setModal(name);
  };

  const closeHandler = () => {
    document.body.style.overflow = 'auto';
    setModal('');
  };

  return (
    <main className='Shop'>
      <div className='wrapper'>
        {coachmark && <img className='coachmark' src='/assets/imgs/in/coachmark.png' onClick={handleClick}/> }
        <div className='header-wrapper'>
          <img className='header' src='/assets/imgs/in/gnb/gnb.png' />
          <img className='header header--nb' src='/assets/imgs/in/gnb/nb.png' />
          {modal === '' && <img className='header header--main' src='/assets/imgs/in/gnb/main.png' /> }
          {modal === 'retro' && <img className='header header--retro' src='/assets/imgs/in/gnb/retro.png' /> }
          {modal === 'buy' && <img className='header header--buy' src='/assets/imgs/in/gnb/buy.png' /> }
          {modal === 'trial' && <img className='header header--trial' src='/assets/imgs/in/gnb/trial.png' /> }
          {modal === 'event' && <img className='header header--event' src='/assets/imgs/in/gnb/event.png' /> }
          {modal === 'install' && <img className='header header--install' src='/assets/imgs/in/gnb/install.png' /> }
        </div>
        <img className='footer' src='assets/imgs/modals/event/bottom.png' />

        <div className='door-wrapper door-wrapper--left' data-left
             onMouseOver={doorMouseOverHandler}
             onMouseOut={doorMouseOutHandler}
        >
          <img className='icon door'
               src='/assets/imgs/in/refrigerator/door.png'
               data-mouseover='/assets/imgs/in/mouseover/door.png' />

          <img className='icon icon--strawberry-milk mouseover'
               src='/assets/imgs/in/refrigerator/strawberry-milk.png'
               data-mouseover='/assets/imgs/in/mouseover/strawberry-milk.png' />

          <img className='icon icon--sprite mouseover'
               src='/assets/imgs/in/refrigerator/sprite.png'
               data-mouseover='/assets/imgs/in/mouseover/sprite.png' />

          <img className='icon icon--water-left mouseover'
               src='/assets/imgs/in/refrigerator/water.png'
               data-mouseover='/assets/imgs/in/mouseover/water.png'
               onClick={() => clickHandler('buy')}
          />
        </div>

        <div className='door-wrapper door-wrapper--right'
             onMouseOver={doorMouseOverHandler}
             onMouseOut={doorMouseOutHandler}
        >
          <img className='icon door'
               src='/assets/imgs/in/refrigerator/door.png'
               data-mouseover='/assets/imgs/in/mouseover/door.png' />

          <img className='icon icon--blue-milk mouseover'
               src='/assets/imgs/in/refrigerator/blue-milk.png'
               data-mouseover='/assets/imgs/in/mouseover/blue-milk.png' />

          <img className='icon icon--coke mouseover'
               src='/assets/imgs/in/refrigerator/coke.png'
               data-mouseover='/assets/imgs/in/mouseover/coke.png' />

          <img className='icon icon--water-right mouseover'
               src='/assets/imgs/in/refrigerator/water.png'
               data-mouseover='/assets/imgs/in/mouseover/water.png' />
        </div>

        <img className='icon icon--tteokbokki mouseover'
             src='/assets/imgs/in/mede/tteokbokki.png'
             data-mouseover='/assets/imgs/in/mouseover/tteokbokki.png' />

        <img className='icon icon--nemoni mouseover'
             src='/assets/imgs/in/mede/nemoni.png'
             data-mouseover='/assets/imgs/in/mouseover/nemoni.png' />

        <img className='icon icon--doong mouseover'
             src='/assets/imgs/in/mede/doong.png'
             data-mouseover='/assets/imgs/in/mouseover/doong.png' />

        <img className='icon icon--cream-bread mouseover'
             src='/assets/imgs/in/mede/cream-bread.png'
             data-mouseover='/assets/imgs/in/mouseover/cream-bread.png'
             onClick={() => clickHandler('retro')}
        />

        <img className='icon icon--red-bead-bread mouseover'
             src='/assets/imgs/in/mede/red-bean-bread.png'
             data-mouseover='/assets/imgs/in/mouseover/red-bean-bread.png' />

        <img className='icon icon--tibisket mouseover'
             src='/assets/imgs/in/mede/tibisket.png'
             data-mouseover='/assets/imgs/in/mouseover/tibisket.png' />

        <img className='icon icon--calendar mouseover'
             src='/assets/imgs/in/calendar.png'
             data-mouseover='/assets/imgs/in/mouseover/calendar.png'
             onClick={() => clickHandler('event')}
        />

        <img className='icon icon--install mouseover'
             src='/assets/imgs/in/install.png'
             data-mouseover='/assets/imgs/in/mouseover/install.png'
             onClick={() => clickHandler('install')}
        />
        <img className='icon icon--refrigerator mouseover'
             src='/assets/imgs/in/refrigerator.png'
             data-mouseover='/assets/imgs/in/mouseover/refrigerator.png'
             onClick={() => clickHandler('trial')}
        />

        <img className='icon icon--grand-mother-1'
             src='/assets/imgs/in/grand-mother1.png'/>

        <img className='icon icon--grand-mother-2'
             src='/assets/imgs/in/grand-mother2.png'/>

        <div className='tv'>
          <video autoPlay loop muted>
            <source src={'/assets/imgs/in/tv.mp4'} type='video/mp4'/>
          </video>
        </div>

        <ModalRetro isOpen={modal === 'retro'} close={closeHandler}/>
        <ModalBuy isOpen={modal === 'buy'} close={closeHandler}/>
        <ModalTrial isOpen={modal === 'trial'} close={closeHandler}/>
        <ModalEvent isOpen={modal === 'event'} close={closeHandler}/>
        <ModalInstall isOpen={modal === 'install'} close={closeHandler}/>
      </div>


      <style jsx>{`
        .Shop {
          position: relative;
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
        }

        .wrapper {
          position: absolute;
          width: 1920px;
          height: 980px;
          background-image: url('/assets/imgs/in/background.jpg');
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
        }

        .coachmark {
          position: absolute;
          z-index: 100;
          cursor: pointer;
        }

        .header {
          position: absolute;
          top: 0;
          z-index: 200000;
        }
        .header--nb { top: 45px; left: 0; z-index: 10; }
        .header--main { left: 96px; }
        .header--retro { left: 236px; }
        .header--buy { left: 347px; }
        .header--trial { left: 430px; }
        .header--event { left: 546px; }
        .header--install { left: 642px; }
        .footer {
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: 10;
          width: 100%;
          height: 37px;
        }

        .tv {
          position: absolute;
          top: 168px;
          left: 822px;
        }

        .door-wrapper {
          position: absolute;
          width: 241px;
          height: 576px;
          cursor: pointer;
        }
        .door-wrapper--left {
          top: 246px;
          left: 288px;
        }
        .door-wrapper--right {
          top: 246px;
          left: 527px;
        }
        .door {
          pointer-events: none;
          z-index: 1;
          transition: transform 0.3s ease-in-out;
        }

        .icon {
          position: absolute;
          width: fit-content;
          heigth: fit-content;
          object-fit: contain;
          object-position: center;
          cursor: pointer;
        }
        .icon--strawberry-milk { top: 161px; left: 19px; }
        .icon--sprite { top: 295px; left: 27px; }
        .icon--water-left { top: 450px; left: 156px; }

        .icon--blue-milk { top: 162px; left: 20px; }
        .icon--coke { top: 297px; left: 23px; }
        .icon--water-right { top: 450px; left: 20px; }

        .icon--tteokbokki { top: 202px; left: 1174px; }
        .icon--nemoni { top: 704px; left: 813px; }
        .icon--doong { top: 386px; left: 1191px; }
        .icon--cream-bread { top: 470px; left: 813px; }
        .icon--red-bead-bread { top: 470px; left: 971px; }
        .icon--tibisket { top: 299px; left: 844px; }

        .icon--calendar { top: 155px; left: 1646px; }
        .icon--install { top: 292px; left: 1704px; }
        .icon--refrigerator { top: 637px; left: 1160px; }
        .icon--grand-mother-1 { bottom: 1px; left: 139px; z-index: 1; animation: fadeInOut 3s infinite; }
        .icon--grand-mother-2 { bottom: 1px; left: 134px; z-index: 1; animation: fadeInOut 3s infinite 1.5s; opacity: 0; }

        @keyframes fadeInOut {
          0% { opacity: 0; }
          0.1% { opacity: 1; }
          50% { opacity: 1; }
          50.1% { opacity: 0; }
          100% { opacity: 0; }
        }
      `}

      </style>
    </main>
  )
};
      
export default Shop;
