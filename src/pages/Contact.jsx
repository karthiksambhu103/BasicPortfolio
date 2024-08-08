import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import './Media.css'




export default function Contact() {

  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_q5uhz6f', 'template_pz4hwvg', form.current, {
        publicKey: 'PJ2o8RAm4Uy1JAygw',
      })
      .then(
        () => {
          alert('Message sent successfully');
        },
        (error) => {
          alert('please try again');
        },
      );
  };
  return (
    <div className='ma'>

      <div className='o' style={{ color: 'white' }}> CONTACT ME</div>

      <div className='io'>
        <form id="contactForm" onSubmit={sendEmail} ref={form}>

          <div className='det'>

            <div className='rak'>

              <div>
                <p>Name:</p>
                <input type="text" name="name" placeholder="Your name" autoComplete="off" ></input>
              </div>
              <div>
                <p>Email:</p>
                <input type="text" name="email" placeholder="Your Email" autoComplete="off" ></input>
              </div>

            </div>

            <div className='rak'>

              <div>
                <p>Phone(optional):</p>
                <input type="text" name="phone" placeholder="Your PhoneNo" autoComplete="off" ></input>
              </div>
              <div>
                <p>Subject:</p>
                <input type="text" name="subject" placeholder="Subject" autoComplete="off" ></input>
              </div>

            </div>

            <div style={{ marginLeft: '30px' }}>
              <p>Message:</p>
              <textarea placeholder="Type your message..." name='message' ></textarea>
            </div>

            <div style={{ marginLeft: '30px' }}>
              <button  type="submit" className='subm' value="send">SUBMIT</button>
            </div>

          </div>

        </form>

        <div className='dam'>
          <div style={{ fontSize: '40px' }}>Get In Touch</div>
          <div style={{ fontSize: '17px' }}>When do they work well, and when do they on us and finally, when do we actually need how can we avoid them.</div>
          <div style={{ fontWeight: 'bold', fontSize: '23px' }}> <a style={{ textDecoration: 'none' }} href='https://wa.me/7795002982' target='blank'> +917795002982</a><br></br><div style={{ marginTop: '20px' }}>karthiksambhu103@gmail.com</div><br></br><a style={{ textDecoration: 'none' }} href='https://www.google.com/maps/place/Rao+Bahadur+Dharmapravartha+Charitable+Institution+Gubbi+Thotadappa/@12.9768722,77.5681111,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1604da0d7e21:0x6f8cf2f6058176eb!8m2!3d12.976867!4d77.570686!16s%2Fg%2F1q629k4gw?entry=ttu' target='blank'>Plot No:88, Gubbi Thotdappa Rd, kempegouda, Majestic, Bengaluru, karabataka 560023</a></div>

        </div>

      </div>

    </div >
  )
}
