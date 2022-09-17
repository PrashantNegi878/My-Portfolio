import Loader from 'react-loaders';
import { useEffect,useState } from 'react';
import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'

const Contact=()=>{
    const strArray=['C','o','n','t','a','c','t',' ','M','e'];
    const form = useRef()

    const [letterClass,setLetterClass]=useState('text-animate');
    useEffect(()=>{
        setTimeout(()=>
        {setLetterClass('text-animate-hover')},4000)
        },[])


        const sendEmail = (e) => {
          e.preventDefault()
      
          emailjs
            .sendForm(
              'service_1esul6x',
              'template_mqa6kbh',
              form.current,
              'GmYLX35LxkW5LbWgn'
            )
            .then(
              () => {
                alert('Message successfully sent!')
                window.location.reload(false)
              },
              () => {
                alert('Failed to send the message, please try again')
              }
            )
        }

    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={strArray} idx={15}/>
                </h1>
                <p>
                    I am interested in opportunities - especially ambitious or
                    large projects. However, if you have other request or question,
                    don't hesitate to contact me using below form either.
                </p>
              
              <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input placeholder="Name" type="text" name="name" required />
                  </li>
                  <li className="half">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
          </div>

            
        </div>
        <Loader type="pacman"></Loader>
        </>
    );
}

export default Contact;