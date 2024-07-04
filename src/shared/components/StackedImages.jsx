import React, { useState, useMemo, useRef, useEffect } from 'react'

const images = [
  './assets/consultoria-ambiental.png',
  './assets/consultoria-ambiental.png',
  './assets/consultoria-ambiental.png',
  './assets/consultoria-ambiental.png',
];

export const StackedImages = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const size = useMemo(() => images.length, []);
  const timer = useRef(-1);
  const containerRef = useRef(null);

  const map = useMemo(() => {
    const map = new Map();
    const len = images.length;
    let i = len;

    if (len < activeIndex || activeIndex < 0)
      throw new Error("Invalid index set as active index");

    while (i > 0) {
      map.set((activeIndex + len - i) % len, --i);
    }

    return map;
  }, [activeIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handler = () => {
      const { width } = container.getBoundingClientRect();
      setContainerWidth(width);
    };

    handler();

    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    timer.current = setInterval(
      () => setActiveIndex((cur) => (cur + 1) % size),
      5000
    );

    return () => clearInterval(+timer.current);
  }, [size]);

  return (
    <div className="flex justify-center items-center my-auto">
      <div className='relative w-96 h-96' ref={containerRef}>
        {images.map((image, i) => {
          const factor = size - 1 - map.get(i);
          const isPreviousActiveIndex = (activeIndex + size - 1) % size === i;
          return (
            // top={0}
            // right={0 - 0.09 * factor * containerWidth}
            // borderRadius="lg"
            // position="absolute"
            // backgroundImage={`url(${image})`}
            // backgroundSize="cover"
            // backgroundRepeat="no-repeat"
            // width="inherit"
            // height="inherit"
            // zIndex={map.get(i)}
            // transform={`scale(${1 - 0.09 * factor})`}
            <div
              key={image}
              className='absolute top-0 right-[calc(0 - 0.09 * factor * containerWidth)] rounded-lg object-cover bg-no-repeat z-[map.get(i)]'
              style={{transform: `scale(${1 - 0.09 * factor})`, boxShadow: "15px 0 10px -3px rgba(0,0,0,0.2)", transition :"z-index 0.6s ease, transform 0.6s ease".concat(
                isPreviousActiveIndex ? ", right 0.3s ease" : ""
              ), backgroundImage:  `url(`+image+`)`}}
            />
          );
        })}
      </div>
    </div>
  );
};
