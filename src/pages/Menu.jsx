import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../Assets/bgm.png';
export default function Menu() {

    const divStyle = {
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${bgImage})`,

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', justifyContent: 'center'
    };

    return (
        <div style={divStyle}>


            <ul className=' j' style={{ display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center', justifyContent: 'space-around', height: '100vh', color: 'white', fontSize: '20px' }}>

                <li class="btn btn-white" ><Link to="/" style={{  textDecoration: 'none' }}>Home</Link></li>
                <li class="btn btn-white"><Link to="/about" style={{ textDecoration: 'none' }}>About</Link></li>

                <li className='tr' style={{color:'black'}}>Services

                    <ul >
                        <li class="btn btn-white" >Multi-Services </li>
                        <li class="btn btn-white" >Single-services</li>
                    </ul>

                </li>

                <li className='tr' style={{color:'black'}}>Projects

                    <ul >
                        <a style={{ color: 'white', textDecoration: 'none' }} href='https://github.com/karthiksambhu103/textUtils' target='blank'> <li class="btn btn-white" style={{ width: '16vw' }} >Text-Utils</li></a>
                        <a style={{ color: 'white', textDecoration: 'none' }} href='https://wonder-ai-i.web.app/' target='blank'> <li class="btn btn-white" style={{ width: '16vw' }}>AI-Image-Generator</li></a>
                        <a style={{ color: 'white', textDecoration: 'none' }} href='https://github.com/karthiksambhu103/Reaction-Time-Tester-game-main' target='blank'> <li class="btn btn-white" style={{ width: '16vw' }}>ReactionTime Tester Game</li></a>
                        <a style={{ color: 'white', textDecoration: 'none' }} href='https://t-shirt-designerr.web.app/' target='blank'><li class="btn btn-white" style={{ width: '16vw' }}>3-D T-shirt Designer</li></a>
                    </ul>

                </li>

                <li class="btn btn-white"><Link style={{  textDecoration: 'none' }} to="/contact">Contact</Link></li>

            </ul>

        </div>
    );
}
