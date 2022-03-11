import React from "react";
import "./technology.css";
import { useState } from "react";
import img1 from "../img/image-launch-vehicle-portrait.jpg"
import img2 from "../img/image-spaceport-portrait.jpg"
import img3 from "../img/image-space-capsule-portrait.jpg"

const Technology = () => {
  const [tech, setTech]=useState([
    {info: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    item: "LAUNCH VEHICLE",
    image: img1,
    selected:true,
    id:1
  },
    {
      info: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
      item: "SPACE PORT",
      image: img2,
      selected:false,
      id:2
    },
    {
      info: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      item: "SPACE CAPSULE",
      image:img3,
      selected:false,
      id:3
    },
  ])
  const [currenTech, setCurrentTech]=useState({info: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    item: "LAUNCH VEHICLE",
    image: img1,
    selected:true,
    id:1
  })
  const handleClick=(currenTech)=>{
    const filerTech=tech.map((Tech)=>{
      const newTech={
        info: Tech.info,
        item:Tech.item,
        image:Tech.image,
        id:Tech.id,
        selected: currenTech.id===Tech.id ? true : false
      }
      return newTech
    })
    setTech([...filerTech])
    setCurrentTech(currenTech)
  }
  return ( 
              <div className="tech-component">
                <div className="tech-tabs">
                            {tech.map((Tech, i)=>(
                                <div key={i} onClick={()=>{handleClick(Tech)}}
                                 style={{
                                padding:'10px 8px',
                                border: "1px solid black",
                                borderRadius: '50%',
                                margin:'1em',
                                marginTop:'1em',
                                marginBottom:'2em',
                                cursor: 'pointer',
                                width: '30px',
                                textAlign:"center",
                                backgroundColor: Tech.selected ? 'white': 'transparent'
                              }}>{Tech.id}</div>
                            ))}
                </div>


                <div className="tech-content">
                    <span>Technology....</span>
                    <h2>{currenTech.item}</h2>
                    <p>{currenTech.info}</p>
                </div>

                  <div className="tech-img">
                      <img src={currenTech.image} alt="" />
                  </div>


              </div>
      );
}
 
export default Technology;