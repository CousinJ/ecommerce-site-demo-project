import React, { useState, useEffect } from "react";
import sideIcon1 from '../assets/website2-UI-icons/reshot-icon-cross-7ZAT89BWSJ.svg'
import sideIcon2 from '../assets/website2-UI-icons/reshot-icon-warning-KR5BC6WPEV.svg'
import sideIcon3 from '../assets/website2-UI-icons/reshot-icon-plus-G97D3XTFYK.svg'
import SideIcon from "./SideIcon";
function Navbar(props) {

    const [navClicked, setNavClicked] =useState('')
   
    function dropFlip(arg, arg2) {
        
        props.data.actions[0](arg2)
        if(navClicked === arg2) {
        setDropper({
            home: {},
            featured: {},
            mens: {},
            womens: {}
            
        })
        
        setNavClicked('')
        props.data.actions[1](true)
        //SETTING CLOSE-DROP...for exiting open drop down.
       
        
        }
         else {
      if(arg === dropper.home) {
        setDropper({  home: { transform: 'rotate(90deg) scale(1.05)'},
            featured: {},
            mens: {},
            womens: {},})
            setNavClicked('home')
            props.data.actions[1](false)
      } else if(arg === dropper.featured) {
        setDropper({  home: {},
        featured: {transform: 'rotate(90deg) scale(1.05)'},
        mens: {},
        womens: {},})
        setNavClicked('featured')
        props.data.actions[1](false)
      } else if(arg === dropper.mens) {
        setDropper({  home: {},
        featured: {},
        mens: {transform: 'rotate(90deg) scale(1.05)'},
        womens: {},})
        setNavClicked('mens')
        props.data.actions[1](false)
      } else if(arg === dropper.womens) {
        setDropper({  home: {},
        featured: {},
        mens: {},
        womens: {transform: 'rotate(90deg) scale(1.05)'},})
        setNavClicked('womens')
        props.data.actions[1](false)
      }
    }

    }
  const [dropper, setDropper] = useState({
    home: {},
    featured: {},
    mens: {},
    womens: {},
  });

  return (
    <div className="nav-bar-main">
      <div className="nav-item-container">
        <div  onClick={() => {
              //setDrop home
             dropFlip(dropper.home, 'home')
            
            }} className="nav-item">
          Home
          <div
           
            style={dropper.home}
            className="nav-item-icon"
          ></div>
        </div>
        <div  onClick={() => {
              //setDrop featured
              dropFlip(dropper.featured, 'featured')
            }} className="nav-item">
          Featured
          <div
           
            style={dropper.featured}
            className="nav-item-icon"
          ></div>
        </div>
        <div  onClick={() => {
              //setDrop mens
            dropFlip(dropper.mens, 'mens')
            }}className="nav-item">
          Mens
          <div
           
            style={dropper.mens}
            className="nav-item-icon"
          ></div>
        </div>
        <div  onClick={() => {
              //setDrop womens
             dropFlip(dropper.womens, 'womens')
            }}className="nav-item">
          Womens
          <div
           
            style={dropper.womens}
            className="nav-item-icon"
          ></div>
        </div>
      </div>
         <SideIcon icon={sideIcon1}></SideIcon>
         <SideIcon icon={sideIcon2}></SideIcon>
         <SideIcon icon={sideIcon3}></SideIcon>
         
    </div>
  );
}

export default Navbar;
