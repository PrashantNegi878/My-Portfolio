import Loader from 'react-loaders';
import { useEffect,useState } from 'react';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import MyCard from './Card/card';
import { ProjectsData } from './projects-data';

const Projects=()=>{
    const strArray=['M','y', ' ','P','r','o','j','e','c','t','s'];

    const [letterClass,setLetterClass]=useState('text-animate');
    useEffect(()=>{
        setTimeout(()=>
        {setLetterClass('text-animate-hover')},4000)
        },[])


    return(
        <>
        <div className='container projects-page'>
        <div className='text-zone'>
        <h1>
        <AnimatedLetters letterClass={letterClass} strArray={strArray} idx={15}/>  
        </h1>
        <div className="p-div">
        <p>
        Here are some of the Projects that i've worked on :
        </p>
        <div className='my-projects'>
        {ProjectsData.map((data)=>{
            return(<MyCard src={data.src} title={data.title} desc={data.desc} key={data.title}/>)
        })}
        </div>
        </div>
        </div>
        </div>
        <Loader type="pacman"></Loader>
        </>
    );
}

export default Projects;