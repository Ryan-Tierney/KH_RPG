import React from 'react' 
import soraSpriteSheet from './soraspritesheet.png'

function Player(props) {
    return (
        <div 
            style={{
                position: 'relative',
                top: props.position[1],
                left: props.position[0],
                backgroundImage:  `url('${soraSpriteSheet})`,
                backgroundPosition: '0 0',
                width: '40px',
                height:'40px'
            }}
        />
    )
}

export default Player