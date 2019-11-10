import React, {useRef, useState} from 'react';

interface Props {
  isDimmer?: boolean;
  width?: string;
  height?: string;
  close: () => void;
  headerImage: string;
  sideBarImage?: string;
  sideBarThumbImage?: string;
  bottomImage?: string;
  bottomThumbImage?: string;
  exitImage?: string;
  children: React.ReactNode;
}

const ModalContents: React.FC<Props> = ({ isDimmer, width, height, close, headerImage, sideBarImage, sideBarThumbImage, bottomImage, bottomThumbImage, exitImage, children }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const verticalRef: React.Ref<HTMLDivElement> = useRef(null);
  const horizontalRef: React.Ref<HTMLDivElement> = useRef(null);

  const handleVerticalScroll = () => {
    if (verticalRef.current) {
      const maxHeight = 550;
      const maxScroll = verticalRef.current.scrollHeight - verticalRef.current.offsetHeight;
      const height = verticalRef.current.scrollTop / (maxScroll / maxHeight);
      setScrollTop(height);
      console.log(height)
    }
  };

  const handleHorizontalScroll = () => {
    if (horizontalRef.current) {
      const maxWidth = 1640;
      const maxScroll = horizontalRef.current.scrollWidth - horizontalRef.current.offsetWidth;
      const width = horizontalRef.current.scrollLeft / (maxScroll / maxWidth);
      setScrollLeft(width);
      console.log(width)
    }
  };

  return (
    <>
      {isDimmer ? (
        <div className='dimmer'>
          <div className='modal-contents' ref={verticalRef} onScroll={handleVerticalScroll}>
            <img className='modal-inner-header' src={headerImage} />
            <img className='exit' src={exitImage} onClick={close} />
            <div className='scrollbar-vertical'>
              <img className='scrollbar-vertical-track' src={sideBarImage}/>
              {sideBarThumbImage && <img className='scrollbar-vertical-thumb' src={sideBarThumbImage} /> }
            </div>
            <div className='scrollbar-horizontal'>
              <img className='scrollbar-horizontal-track' src={bottomImage} />
            </div>

            {children}
          </div>
        </div>
      ) : (
        <div className='modal-contents' ref={horizontalRef} onScroll={handleHorizontalScroll}>
          <img className='modal-inner-header' src={headerImage} />
          <img className='exit' src={exitImage} onClick={close} />
          <div className='scrollbar-vertical'>
            <img className='scrollbar-vertical-track' src={sideBarImage}/>
          </div>
          <div className='scrollbar-horizontal'>
            <img className='scrollbar-horizontal-track' src={bottomImage} />
            {bottomThumbImage && <img className='scrollbar-horizontal-thumb' src={bottomThumbImage} /> }
          </div>

          {children}
        </div>
      )}

      <style jsx>{`
        .modal-contents {
          position: relative;
          margin-top: 45px;
          width: 100%;
          height: auto;
          overflow: auto;
          max-width: ${width};
          max-height: ${height};
        }
        .modal-contents::-webkit-scrollbar {
          display: none;
        }
        .modal-inner-header {
          position: fixed;
          top: 45px;
          left: 0;
          width: 100%;
          height: 42px;
          object-fit: cover;
          object-position: left;
          z-index: 1000;
        }
        .scrollbar-vertical {
          position: fixed;
          top: 82px;
          right: 0;
          z-index: 500;
        }
        .scrollbar-vertical-track {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 500;
        }
        .scrollbar-vertical-thumb {
          position: absolute;
          top: ${scrollTop}px;
          right: 0;
          padding: 2px;
          z-index: 500;
        }
        .scrollbar-horizontal {
          position: fixed;
          bottom: -5px;
          left: 0;
          z-index: 500;
        }
        .scrollbar-horizontal-track {
          position: absolute;
          bottom: 0;
          left: 0;
          margin: 4px 0;
          z-index: 500;
        }
        .scrollbar-horizontal-thumb {
          position: absolute;
          bottom: 0;
          left: calc(${scrollLeft}px + 30px);
          padding: 6px;
          z-index: 500;
        }
        .dimmer {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .exit {
          position: fixed;
          left: 30px;
          top: 53px;
          z-index: 2000;
          cursor: pointer;
        }
      `}
      </style>
    </>
  )
};

export default ModalContents;
