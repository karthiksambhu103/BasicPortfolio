import React from 'react'
import './Navbar.css'
import DownloadIcon from '@mui/icons-material/Download';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import './Media.css'

export default function Navbar() {

  const lk = require('../Assets/7fada7b8e80af1d09af9547beff35c95-removebg-preview.png')
  const pdf = require('../Assets/KartikSambhu.pdf');

  return (
    <div className='main'>
      <div className='smain'>

        <div className='log'> <img src={lk} alt="" style={{ height: '80px', width: '80px' }} />
          <div>Bankai</div>
        </div>

        <div className='item'>

          <ul className='list'>

            <li className='tr' ><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
            <li className='tr'><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>

            <li className='tr'>Services<KeyboardArrowDownIcon />

              <ul className='ser'>
                <li className='ux'>Multi-Services
                  <ul className='ser1'>
                    <li className='ui'>Full-stack</li>
                    <li className='ui'>Android-build</li>
                    <li className='ui'>Game-Apks</li>
                    <li className='ui'>Devops</li>
                    <li className='ui'>Cloud-services</li>
                  </ul>
                </li>
                <li className='ux'>Single-services</li>
              </ul>

            </li>

            <li className='tr'>Projects<KeyboardArrowDownIcon />

              <ul className='ser'>
                <a style={{ color: 'white', textDecoration: 'none' }} href='https://github.com/karthiksambhu103/textUtils' target='blank'> <li className='ux' style={{ width: '16vw' }} >Text-Utils</li></a>
                <a style={{ color: 'white', textDecoration: 'none' }} href='https://wonder-ai-i.web.app/' target='blank'> <li className='ux' style={{ width: '16vw' }}>AI-Image-Generator</li></a>
                <a style={{ color: 'white', textDecoration: 'none' }} href='https://github.com/karthiksambhu103/Reaction-Time-Tester-game-main' target='blank'> <li className='ux' style={{ width: '16vw' }}>ReactionTime Tester Game</li></a>
                <a style={{ color: 'white', textDecoration: 'none' }} href='https://t-shirt-designerr.web.app/' target='blank'><li className='ux' style={{ width: '16vw' }}>3-D T-shirt Designer</li></a>
              </ul>

            </li>

            <li className='tr'>Blog<KeyboardArrowDownIcon />

              <ul className='ser'>
                <li className='ux' style={{ width: '30vw', background: 'green' }}>Get a Premium Membership to access blogs </li>
              </ul>

            </li>

            <li className='tr'><Link style={{ color: 'white', textDecoration: 'none' }} to="/contact">Contact</Link></li>

          </ul>

          <a style={{ color: 'white' }} href={pdf} download="kartik.pdf"><div className='down'><DownloadIcon /></div></a>
          <div className='men' ><Link to="/menu" style={{ color: 'white'}}><MenuIcon style={{ height: '40px', width: '40px' }} /></Link></div>

        </div>

      </div>
    </div >
  )
}
