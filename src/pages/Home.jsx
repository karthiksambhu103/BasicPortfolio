import React from 'react'
import './Home.css'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import { Link } from 'react-router-dom';

const Home = () => {
    const profilePhoto = require('../Assets/Spider-Man No Way Home 2021.png')

    return (
        <div className='home-container'>
            <div className="p">
                <div className='h'>
                    <a href='mailto:karthiksambhu103@gmail.com' target='_blank' rel="noopener noreferrer">
                        <EmailIcon className='email' style={{ height: '30px', width: '30px' }} />
                    </a>
                    <a href='https://github.com/karthiksambhu103' target='_blank' rel="noopener noreferrer">
                        <GitHubIcon className='git' style={{ height: '30px', width: '30px' }} />
                    </a>
                    <a href='https://www.linkedin.com/in/kartik-sambhu-b94300270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel="noopener noreferrer">
                        <LinkedInIcon className='lik' style={{ height: '30px', width: '30px' }} />
                    </a>
                    <a href='https://wa.me/7795002982' target='_blank' rel="noopener noreferrer">
                        <WhatsAppIcon className='wt' style={{ height: '30px', width: '30px' }} />
                    </a>
                </div>
            </div>

            <div className='home-text'>
                <div className='ka'>
                    <h1 className="o">Hello, I'm <span>👋</span></h1>
                    <h1 className="lo"><mark>Software</mark> Developer</h1>
                </div>
               
                <Link className="btn btn-white" to="/about" ><p className="btn-text">Know More About Me</p></Link>
                <div className='home-photo'>
                    <img className='profile-photo' src={profilePhoto} alt="Kartik Sambhu" />
                </div>
            </div>

            <div className='ho'>
                <div className="y">
                    <div>
                        <h1 className="r">20+ </h1>
                        <div>PROJECTS <br />COMPLETED</div>
                    </div>
                </div>

                <div className="t">
                    <div className='m'>
                        <WbSunnyTwoToneIcon style={{ height: '50px', width: '50px', color: 'orange' }} />
                    </div>
                    <p>A <span>Freelance Designer and Developer based in BANGALORE.</span> I strive to build immersive and beautiful web applications through carefully crafted user-centric design.</p>
                </div>

                <div className="l">
                    <div className='fc'>
                        <div className='er'><ArrowDownwardTwoToneIcon /></div>
                    </div>
                    <div>SCROLL<br />DOWN</div>
                </div>
            </div>
        </div>
    )
}

export default Home;
