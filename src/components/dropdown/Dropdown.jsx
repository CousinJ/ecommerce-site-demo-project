import React, {useState, useEffect} from 'react'

function Dropdown(props) {



    //style object
    let styleObject = { width: '100px', height: '1px'}
    //style object changer function
    const styleObjectChanger = (opac) => {
        styleObject={filter: 'brightness(.9)',  opacity: `${opac}`, backgroundColor: 'white', width: '100%', height: '400px'}

      }

  
   

    //make sure the menu closes on a consecutive click.
if(props.closeDrop) {
    styleObjectChanger(0)
}
   

   if(props.drop === props.dropKey && !props.closeDrop) {
       
   
 
            styleObjectChanger(1)  
   } 
    return(<div  style={styleObject} className='drop-down'>
        {props.dropKey}
        
    </div>)
}

export default Dropdown;