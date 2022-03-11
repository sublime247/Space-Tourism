import './App.css';
import { useState } from 'react';
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom"
import img from "./img/logo.svg"
import line from "./img/Rectangle.png" 
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology'
import iconOpen from './img/icon-hamburger.svg'
import iconClose from './img/icon-close.svg'


function App() {
  const [openNav, setOpenNav]=useState(true)
   const [closeNav, setCloseNav]=useState(true)
  const [displayNav, setDisplayNav]=useState(true)
  const showNav=()=>{
    if (openNav===true){
      setCloseNav(true)
      setOpenNav(false)
      setDisplayNav(true)
    }else{
      closeNav(false)
    }
  }
  const hideNav =()=>{
    if( closeNav===true){
      setOpenNav(true)
      setCloseNav(false)
      setDisplayNav(false)
    }else{
      openNav(true)
      displayNav(false)
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
      <header>
              <div className='logo'>
                <img src={img} alt="logo"
                    style={{
                     marginTop: '1.5em',
                     marginLeft: '2.5em'
                    }} />
                </div>
              <div className='line'>
                <img src={line} alt="" 
                    style={
                      {
                        marginTop: '3.1em',
                        position: "relative",
                        left: "5em"

                       }
                          }/></div>

                       {openNav && <div className='openNav' onClick={showNav}><img src={iconOpen} alt=""  style={{
                            marginTop: '1.5em',
                            marginRight:'1em',
                          }} /></div> }

              {displayNav && <ul
               style={openNav&&!displayNav ? {display: 'none'}:{display: 'block'}}>
                  <NavLink exact to= '/'> 01 <span>Home</span> </NavLink> 
                  <NavLink to='/destination'> 02 <span>Destination</span> </NavLink>
                  <NavLink to='/crew'> 03 <span>Crew</span> </NavLink>
                  <NavLink to='/technology'>04 <span>Technology</span> </NavLink>
              </ul> }
           {closeNav && !openNav &&<div className='closeNav' onClick={hideNav}>
                              <img src={iconClose} alt=""  style={{
                            marginTop: '1.5em',
                            marginRight:'1em'}} /></div>}
     </header>
     
       <Switch>
         <Route exact path="/">
           <Home /> 
         </Route>
         <Route path="/destination">
           <Destination />
         </Route>
         <Route path='/crew'>
          <Crew />
         </Route>
         <Route path= '/technology'>
           <Technology />
         </Route>
       </Switch>
       
     </BrowserRouter>
    </div>
  );
}

export default App;
