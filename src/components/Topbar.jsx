import React from 'react' 
import logoImage from '../assets/images/ecom-site-logo.png'
import twitterIcon from '../assets/social-icons/icons8-twitter.svg'
import instagramIcon from '../assets/social-icons/icons8-instagram.svg'
import tikTokIcon from '../assets/social-icons/icons8-tiktok-40.svg'
function Topbar() {

    function Logo() {
        return(<div style={{backgroundImage: `url(${logoImage})`}} className='logo-main'></div>)
    }
    
    function SocialSideIcon(props) {
        return(<div style={{backgroundImage: `url(${props.icon})`}} className='social-icon'></div>)
    }

    return(<div className='top-bar-main'>
        <Logo></Logo>
        <div className='social-icon-container'>
        <SocialSideIcon icon={twitterIcon}></SocialSideIcon>
        <SocialSideIcon icon={tikTokIcon}></SocialSideIcon>
        <SocialSideIcon icon={instagramIcon}></SocialSideIcon>
        </div>
        
    </div>)
}

export default Topbar;