import './index.scss';
import AnimatedLetters from '../../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJava, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
const About=()=>
{
    const [letterClass,setLetterClass]=useState('text-animate');

    useEffect(()=>{
        setTimeout(()=>
        {setLetterClass('text-animate-hover')},4000)
        },[])

    return(
          <>
          <div className='about-page-outer '>
            <div className='about-page container '>
            <div className='text-zone'>
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','M','e']} idx={15}/>
            </h1>
            <p>
            I'm very ambitious full-stack developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, Cinephile ,
            Video Games enthusiast, and tech-obsessed!!!
          </p>
            </div>

          <div className='stage-cube-cont'>
              <div className='cubespinner'>
                  <div className='face1'>
                  <FontAwesomeIcon icon={faJava} color="#DD0031"></FontAwesomeIcon>
                  </div>
                  <div className='face2'>
                  <FontAwesomeIcon icon={faHtml5} color="#F06529"></FontAwesomeIcon>
                  </div>
                  <div className='face3'>
                  <FontAwesomeIcon icon={faCss3} color="#28A4D9"></FontAwesomeIcon>
                  </div>
                  <div className='face4'>
                  <FontAwesomeIcon icon={faReact} color="#5ED4F4"></FontAwesomeIcon>
                  </div>
                  <div className='face5'>
                  <FontAwesomeIcon icon={faJs} color="#EFD81D"></FontAwesomeIcon>
                  </div>
                  <div className='face6'>
                  <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"></FontAwesomeIcon>
                  </div>
              </div>
          </div>
          </div> 
          </div>
          <Loader type='pacman'/>
          </>
    );
}

export default About;