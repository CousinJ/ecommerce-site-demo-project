import React from 'react'

function SideIcon(props) {
    return(<div style={{backgroundImage: `url(${props.icon})`}}className='side-icon'></div>)
}

export default SideIcon;