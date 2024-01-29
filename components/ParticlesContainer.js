import { Particles } from 'react-tsparticles'; 
import { loadFull } from 'tsparticles'; 
import React, { useCallback } from 'react';

const ParticlesContainer = () => {
  //init
  const particlesInit = useCallback( async ( engine) => {
    await loadFull(engine);
  }, []);
  
  const particlesLoaded = useCallback(async () => {}, []);
  return(
      <Particles id="tsparticles"  init={particlesInit} loaded={particlesLoaded} 
      option={{
        fullScreen: {enable: false},
        background: {
          color: {
            value: '',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onclick: {
              enable: false,
              mode: push,
            },
          },
        },
      }}
      />
    )


};

export default ParticlesContainer;
