import { React, useCallback, useState } from "react";

import Particles from "react-particles";

import { loadFull } from "tsparticles";

import './App.css';

import Welcome from './components/welcome/welcome';

import DisplayMode from "./components/displayMode/displayMode";

import Profile from "./components/profile/profile";

import Employment from "./components/employment/employment";

function App() {

  const [displayMode, setDisplayMode] = useState({mode: "Dark Mode", backgroundColour: "ffffff", fontColour: "000000", particleColour: "000000"});

    //Particle background
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    //Particle background
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  return (
    <div>
      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: displayMode.backgroundColour,
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: displayMode.particleColour,
                    },
                    links: {
                        color: displayMode.particleColour,
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
      />
      <DisplayMode displayMode={displayMode} setDisplayMode={setDisplayMode}/>
      <Welcome displayMode={displayMode}/>
      <Profile displayMode={displayMode}/> 
      <Employment displayMode={displayMode}/>   
    </div>
  );
}

export default App;
