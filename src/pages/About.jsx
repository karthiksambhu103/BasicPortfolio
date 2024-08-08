import React from 'react'
import './About.css'
import DownloadIcon from '@mui/icons-material/Download';
import './Media.css'

export default function About() {
  
  const pdf=require('../Assets/KartikSambhu.pdf');
  const suk = require('../Assets/sukuna.png')
  
  return (
    <div className='about'>

      <div className='tex'>

        <div className='tex1'>
          
          <div className='o' style={{ textAlign: 'left'}}>Hello, I'm <spam>👋</spam></div>
          <div className='lo' style={{animation: 'heading 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95)'}}> Kartik Sambhu</div>
          <p style={{ lineHeight: '33px',animation: 'heading 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95)'}}>A<span style={{ fontWeight: 'bold' }}> Freelance Designer and Developer based in BANGLORE. </span>I strives to build immersive and beautiful web applications through carefully crafted used -centric design.</p>

          <a style={{textDecoration:'none'}} href={pdf} download><div className='s4'> DOWNLOAD CV<DownloadIcon style={{ color: 'rgb(236, 240, 5)' }} /></div></a> 

        </div>

      </div>

      <div className='phot'>
        <img src={suk} alt="" />
      </div>

    </div>
  )
}
