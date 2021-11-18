import React from 'react';
import './Hemisphere.css'
import northernpic from './images/northern.png';
import southernpic from './images/southern.png';

const hemisphereConfig = {
    Northern: {
        text: 'it is northern hemisphere',
        picture: northernpic
    },
    Southern: {
        text: 'it is the southern hemisphere',
        picture: southernpic
    }
}

const HemisphereDisplay = ({ latitude }) => {
    
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern' ;
    const { text, picture } = hemisphereConfig[hemisphere]
    return(
    
        <div className = { hemisphere } >
            <div className = 'ui raised text container segment'>
                <div className = 'image'>
                    <img src={picture} alt = "hemisphere picture"/>
                </div>
                <div className = 'ui teal bottom attached label'>
                    <hi>{ text }</hi>
                </div> 
            </div>
        </div>
        
    )
}

export default HemisphereDisplay;