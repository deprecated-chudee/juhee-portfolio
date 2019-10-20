import React, { useEffect } from 'react';

const Scene3: React.FC = () => {

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

  const mouseOverHandler = (e: MouseEvent) => {
    const img = e.target as HTMLImageElement;

    img.style.zIndex = '1';
    img.style.transform = 'translate(-5px, -5px)';
    img.setAttribute('data-src', img.src);
    img.setAttribute('src', img.dataset['mouseover']!);
  };

  const mouseOutHandler = (e: MouseEvent) => {
    const img = e.target as HTMLImageElement;

    img.style.zIndex = '0';
    img.style.transform = 'translate(0, 0)';
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

  return (
    <main className='Scene3'>
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
             data-mouseover='/assets/imgs/in/mouseover/water.png' />
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
           data-mouseover='/assets/imgs/in/mouseover/cream-bread.png' />

      <img className='icon icon--red-bead-bread mouseover'
           src='/assets/imgs/in/mede/red-bean-bread.png'
           data-mouseover='/assets/imgs/in/mouseover/red-bean-bread.png' />

      <img className='icon icon--tibisket mouseover'
           src='/assets/imgs/in/mede/tibisket.png'
           data-mouseover='/assets/imgs/in/mouseover/tibisket.png' />

      <img className='icon icon--calendar mouseover'
           src='/assets/imgs/in/calendar.png'
           data-mouseover='/assets/imgs/in/mouseover/calendar.png' />

      <img className='icon icon--install mouseover'
           src='/assets/imgs/in/install.png'
           data-mouseover='/assets/imgs/in/mouseover/install.png' />

      <img className='icon icon--grand-mother-1'
           src='/assets/imgs/in/grand-mother1.png'/>

      <img className='icon icon--grand-mother-2'
           src='/assets/imgs/in/grand-mother2.png'/>

      <style jsx>{`
        .Scene3 {
          position: relative;
          width: 1920px;
          height: 980px;
          background-image: url('/assets/imgs/in/background.jpg');
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
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
        .icon--strawberry-milk { top: 166px; left: 24px; }
        .icon--sprite { top: 300px; left: 32px; }
        .icon--water-left { top: 455px; left: 161px; }

        .icon--blue-milk { top: 167px; left: 25px; }
        .icon--coke { top: 302px; left: 28px; }
        .icon--water-right { top: 455px; left: 25px; }

        .icon--tteokbokki { top: 207px; left: 1185px; }
        .icon--nemoni { top: 709px; left: 818px; }
        .icon--doong { top: 391px; left: 1196px; }
        .icon--cream-bread { top: 475px; left: 818px; }
        .icon--red-bead-bread { top: 475px; left: 976px; }
        .icon--tibisket { top: 304px; left: 849px; }

        .icon--calendar { top: 160px; left: 1651px; }
        .icon--install { top: 297px; left: 1714px; }
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
      
export default Scene3;
