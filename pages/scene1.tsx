import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const NEXT_PAGE = 2800;
const PERSPECTIVE = -2160;
const DIVSION = 15;

const Scene1: React.FC = () => {
  const router = useRouter();
  const ref: React.Ref<HTMLDivElement> = useRef(null);

  useEffect(() => {
    scroll();
  }, []);

  const scroll = () => {
    document.addEventListener('scroll', function (event: Event) {
      event.preventDefault();
      const scrollTop = document.scrollingElement ? document.scrollingElement.scrollTop : 0;

      console.log(ref.current);
      // TODO change useState
      ref.current && ref.current.setAttribute(
        'style',
        `transform: translate3d(0, ${scrollTop / DIVSION}px, ${PERSPECTIVE + scrollTop}px)`
      );

      if(scrollTop >= NEXT_PAGE) {
        router.push('/scene2');
      }
    }, true);
  };

  return (
    <main className='Scene1'>
      <div className='scroll'>
        <article ref={ref}  className='wrapper'>
          <div className='background'/>
        </article>
      </div>


      <style jsx>{`
        .Scene1 {
          display: block;
          position: absolute;
          width: 100%;
          height: 4000px;
          overflow:auto;
        }
        .scroll {
          position: fixed;
          width: 1920px;
          height: 1080px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          perspective: 2160px;
          transition: all 10s;
        }
        .wrapper {
          width: 1920px;
          height: 1080px;
          position: absolute;
          transform: translate3d(0, 0, -2160px);
          top: 0;
          left: 0;
          background-size: cover;
        }
        .background {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 3840px;
          height: 2160px;
          background-image: url('/assets/imgs/intro/intro3840.jpg');
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
        }
      `}</style>
    </main>
  )
};

export default Scene1;
