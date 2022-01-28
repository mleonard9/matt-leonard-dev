import React from 'react'
import './App.css'
import Home from './Components/Home'
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";
import Projects from './Components/Projects'
import About from './Components/About'
import Experience from './Components/Experience'

function App() {
    return (
			<div className="App">
				<Home />
				<About />
				<Projects />
				<Experience />
				<Particles options={particlesOptions} className='particles'/>
			</div>
    );
}

export default App;
