import React from "react";
import { useState } from "react";
import  "./destination.css";
import img1 from "../img/image-moon.png"
import img2 from "../img/image-mars.png"
import img3 from "../img/image-europa.png"
import img4 from "../img/image-titan.png"

const Destination = () => {
  const [Planets, setPlanets]= useState([
        {name:"MOON",
         image:img1,
         id: '1',
         selected:true,
         info: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
         averageDist: ' averageDist',
         travelTime: 'Est. travel time',
         km: '384,400km',
          days: '3 days'
         },


        {name:"MARS",
         image:img2,
         id:'2',
        selected:false,
         info: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
         averageDist:'averageDist',
         travelTime:'Est. travel time',
         km:'225 MIL. km',
         days:'9 months'
        },


        { name:"EUROPA",
         image:img3,
         id:'3',
         selected:false,
         info: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
         averageDist:'averageDist',
         travelTime:'Est. travel time',
         km:'628 MIL. km',
         days:'3 years'
        },
        {name:"TITAN",
         image:img4,
         id:'4',
         selected:false,
         info: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
         averageDist:'averageDist',
         travelTime:'Est. travel time',
         km:'1.6 BIL. km',
         days:'7 years'
        }
    ])

    const [currentplanet, setCurrentPlanet]=useState({name:"MOON",
    image:img1,
    id: '1',
    selected:true,
    info: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    averageDist: ' averageDist',
    travelTime: 'Est. travel time',
    km: '384,400km',
     days: '3 days'
    })
    const handlePlanet=(currentplanet)=>{
      const filterPlanet = Planets.map((planet)=>{
         const newPlanet = {
              name: planet.name,
              image: planet.image,
              info:planet.info,
              id:planet.id,
              averageDist:planet.averageDist,
              travelTime:planet.travelTime,
              km:planet.km,
              days:planet.days,
              selected: currentplanet.name===planet.name ? true : false
         }
         return newPlanet
      })
      setPlanets([...filterPlanet])
      setCurrentPlanet(currentplanet)
    }

  return ( 
    <div className="destination">
    
       <div className="content-component">
                  <div className="Globe">
                      <p><span>{currentplanet.id}</span> PICK YOUR DESTINATION</p>
                      <div><img src={currentplanet.image} alt="" /></div>
                  </div>
          <div className="tabs-contents">
                  <div className="destination-tabs">
                                {Planets.map((planet,i)=>(
                                <button key={i} onClick={()=>{handlePlanet(planet)}} 
                                style={{
                                        background:'none',
                                          border: 'none',
                                          color: "white",
                                          borderBottom: planet.selected ? '3px solid white' :"none",
                                          // margin: '1em',
                                          paddingBottom: '0.8em'
                                    }}>{planet.name}</button>
                                  ))}
                    </div>
                <h1>{currentplanet.name}</h1>
                <p>{currentplanet.info}</p>
                <hr />
                <div className="main-info">
                  <div>
                  <span>{currentplanet.averageDist}</span>
                  <h3> {currentplanet.km}</h3>
                  </div>
                  <div>
                  <span>{currentplanet.travelTime} </span>
                  <h3>{currentplanet.days}</h3>
                  </div>
                </div>
          </div>
       </div>
    </div>
   );
}
 
export default Destination;
