import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from './config/particles-config';

function ParticleBackground(props) {
    const particlesInit = async (main) => {
        await loadFull(main);
    }
    return (
        <div>
            <Particles 
            id="tsparticles"
            init={particlesInit}
            options={particlesConfig}
            />
            
        </div>
    );
}

export default ParticleBackground;