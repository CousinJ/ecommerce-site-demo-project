import React from 'react'
import Dropdown from './Dropdown';
function Dropdowns(props) {
    return(<div className='drop-downs-main'>
        <Dropdown closeDrop={props.data.closeDrop} dropKey='home' drop={props.data.drop} customClass={'home-drop-down'}></Dropdown>
        <Dropdown closeDrop={props.data.closeDrop} dropKey='featured' drop={props.data.drop} customClass={'featured-drop-down'}></Dropdown>
        <Dropdown closeDrop={props.data.closeDrop} dropKey='mens'  drop={props.data.drop} customClass={'mens-drop-down'}></Dropdown>
        <Dropdown closeDrop={props.data.closeDrop} dropKey='womens' drop={props.data.drop} customClass={'womens-drop-down'}></Dropdown>
    </div>)
}

export default Dropdowns;