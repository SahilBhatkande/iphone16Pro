import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { rightImg, watchImg } from '../utils';
import VideoCarousel from './VideoCarousel'

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 });
    gsap.fromTo(
      '.link',
      { opacity: 0, y: 20 }, // Initial state
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 } // Final state with staggered animation
    );
  }, []);

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width mb-20">
        <div className="flex items-center gap-x-40 "> {/* Flex container for same-line layout */}
        <h1 id="title" className="section-heading mb-2">Get the Highlights</h1>
        <div className="flex flex-wrap items-center gap-x-5 -mt-2"> {/* Adjust gap and margin */}


            <p className="link flex items-center">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link flex items-center">
              Watch the events
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel className="mt-10" />
      </div>
    </section>
  );
};

export default Highlights;
