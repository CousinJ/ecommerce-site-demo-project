import React, { useState, useEffect } from "react";

function Navbar(props) {

    const [navClicked, setNavClicked] =useState('')

    function dropFlip(arg, arg2) {
        
        if(navClicked === arg2) {
        setDropper({
            home: {},
            featured: {},
            mens: {},
            womens: {}
            
        })
        setNavClicked('')
        }
         else {
      if(arg === dropper.home) {
        setDropper({  home: { transform: 'rotate(90deg) scale(1.05)'},
            featured: {},
            mens: {},
            womens: {},})
            setNavClicked('home')
      } else if(arg === dropper.featured) {
        setDropper({  home: {},
        featured: {transform: 'rotate(90deg) scale(1.05)'},
        mens: {},
        womens: {},})
        setNavClicked('featured')
      } else if(arg === dropper.mens) {
        setDropper({  home: {},
        featured: {},
        mens: {transform: 'rotate(90deg) scale(1.05)'},
        womens: {},})
        setNavClicked('mens')
      } else if(arg === dropper.womens) {
        setDropper({  home: {},
        featured: {},
        mens: {},
        womens: {transform: 'rotate(90deg) scale(1.05)'},})
        setNavClicked('womens')
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
    </div>
  );
}

export default Navbar;
