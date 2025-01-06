import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import Modelview from './Modelview';
import { yellowImg } from '../utils';
import * as THREE from 'three';
import { View } from '@react-three/drei';
import { models, sizes } from '../constants';



const Model = () => {
  const [model, setModel] = useState({
    title: 'iPhone 16 Pro in Natural Titanium',
    color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
    img: yellowImg,
  });

  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  const [size, setSize] = useState(sizes[0].values); // Set default size

  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);


  const tl = gsap.timeline();

  useEffect(() => {

    if(size === 'large')
    {
        animationWithGsapTimeline(tl , small , smallRotation , 
            '#view1' , '#view2' , {
                transform: 'translateX(-100%)',
                duration : 2
            }
        )
    }

    if(size === 'small')
    {
        animationWithGsapTimeline(tl , large , largeRotation , 
            '#view2' , '#view1' , {
                transform: 'translateX(0)',
                duration : 2
            }
        )

    }

  },[size])


  // GSAP Animation
  React.useEffect(() => {
    gsap.to('#heading', { y: 0, opacity: 1 });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 className="section-heading" id="heading">Take a closer look</h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <Modelview
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={small}
            />
            <Modelview
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={large}
            />
            <Canvas className='w-full h-full' style={ { position: 'fixed' ,  top : 0 , bottom:0  , right:0 , left:0 ,overflow: 'hidden' }}
            
                eventSource={document.getElementById('root')}
            >
              <View.Port/>
            </Canvas>
          </div>

          <div className="mx-auto w-full">
  <p className="text-sm font-light text-center mb-5">
    {model.title}
  </p>

  <div className="flex items-center justify-center space-x-4">
    <ul className="flex space-x-2">
      {models.map((item, i) => (
        <li
          key={i}
          className="w-6 h-6 rounded-full cursor-pointer"
          style={{ background: item.color[0] }}
          onClick={() => setModel(item)}
        />
      ))}
    </ul>

    <button className="flex space-x-2">
      {sizes.map(({ label, values }) => (
        <span
          key={label}
          className="btn-size px-2 py-1 rounded-full cursor-pointer"
          style={{
            backgroundColor: size === values ? 'white' : 'transparent',
            color: size === values ? 'black' : 'white',
          }}
          onClick={() => setSize(values)}
        >
          {label}
        </span>
      ))}
    </button>
  </div>
</div>


            </div>

        </div>
    
    </section>
  );
};

export default Model;
