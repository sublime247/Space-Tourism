import React from 'react'
import "./home.css";
import img from "../img/Group.png"

const Home = () => {
  return ( 
    <div className="home">
      <div className='content'>
      <p>SO, YOU WANT TO TRAVEL TO SPACE</p>
      <h1>SPACE</h1>
      <p>Let’s face it; if you want to go to space, you might as well  genuinely go to outer space and not hover kind of on the  edge of it. Well sit back, and relax because we’ll give you a  truly out of this world experience!</p>
    </div>
    <div className="explore"><img src={img} alt="" /></div>
    </div>
   );
}
 
export default Home;
