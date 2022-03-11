import React from 'react'
import {useState} from "react"
import {Icon} from 'react-icons-kit'
import {arrowRight} from "react-icons-kit/feather/arrowRight"
import {arrowLeft} from "react-icons-kit/feather/arrowLeft"
import img1 from '../img/crew1.png'
import img2 from '../img/crew2.png'
import img3 from '../img/crew3.png'
import img4 from '../img/crew4.png'
import "./crew.css"
import {motion} from 'framer-motion'

const imgBoxVariants = {
  hidden:{
    x: 500,
    opacity: 0
  },
  visible:{
    x: 0,
    opacity: 1,
    transition:{
      delay: 0.5, duration: 0.5
    }
  }
}

function Crew(){
const [firstcrew, setFirstCrew]=useState(
    {name: 'Douglas Hurley',
    intro: 'meet your crew',
    id: '01',
    title: 'commander',
    profile:'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    image: img1,
    })
   const [secondCrew, setSecondCrew]=useState({name: 'James smith',
  intro: 'meet your crew',
  id: '02',
  title: 'mission specialist',
  profile:'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
  image: img2
  })
  const[thirdCrew, setThirdCrew] =useState(
  {name: 'VICTOR GLOVER',
  intro: 'meet your crew',
  id: '03',
  title: 'pilot',
  profile:'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
  image: img3
  })
  const [fourthcrew, setFourthCrew]=useState(
 {
    name: 'Anousheh Ansari',
  intro: 'meet your crew',
  id: '04',
  title: 'flight engineer',
  profile:'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
  image: img4,
  selected: false
  })
  const [step, setStep]=useState(1);


const handleLeft =()=>{
  if (step===1){
    setStep(4)
  }else{
    setStep(step-1)
  }
}
const handleRight=()=>{
  if (step===4){
    setStep(1)
  }else{
    setStep(step+1)
  } 
}


  return(
   <div className='crew-component'>
    <div className="wrapper-crew">
        <div className="leftArrow" onClick={handleLeft}> <Icon icon={arrowLeft} size={40} style={{backgroundColor: 'white', borderRadius:'50%'}} /> </div>
        <div>
         {step===1 && <motion.div className="crew-content"  variants={imgBoxVariants}
       initial="hidden" animate="visible">
            <div>
            <p><span>{firstcrew.id}</span> {firstcrew.intro}</p>
            <h3>{firstcrew.title}</h3>
            <h2>{firstcrew.name}</h2>
            <p>{firstcrew.profile}</p>
            </div>
            <div>
            <img src={firstcrew.image} alt="" />
            </div>
            </motion.div>}
            {step===2 && <motion.div className="crew-content"  variants={imgBoxVariants}
       initial="hidden" animate="visible">
            <div>
            <p><span>{secondCrew.id}</span> {secondCrew.intro}</p>
            <h3>{secondCrew.title}</h3>
            <h2>{secondCrew.name}</h2>
            <p>{secondCrew.profile}</p>
            </div>
            <div>
            <img src={secondCrew.image} alt="" />
            </div>
            </motion.div>}
            {step===3 && <motion.div className="crew-content"  variants={imgBoxVariants}
       initial="hidden" animate="visible">
            <div>
            <p><span>{thirdCrew.id}</span> {thirdCrew.intro}</p>
            <h3>{thirdCrew.title}</h3>
            <h2>{thirdCrew.name}</h2>
            <p>{thirdCrew.profile}</p>
            </div>
            <div>
            <img src={thirdCrew.image} alt="" />
            </div>
            </motion.div>}
            {step===4 && <motion.div className="crew-content"  variants={imgBoxVariants}
       initial="hidden" animate="visible">
            <div>
            <p><span>{fourthcrew.id}</span> {fourthcrew.intro}</p>
            <h3>{fourthcrew.title}</h3>
            <h2>{fourthcrew.name}</h2>
            <p>{fourthcrew.profile}</p>
            </div>
            <div>
            <img src={fourthcrew.image} alt="" />
            </div>
            </motion.div>}
            </div>
        <div className="rightArrow" onClick={handleRight}><Icon style={{backgroundColor: 'white', borderRadius:'50%'}} icon={arrowRight} size={40} /></div>
        </div>
      

   </div>
  )
}
export default Crew
