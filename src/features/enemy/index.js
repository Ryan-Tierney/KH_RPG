import React from 'react' 
import rikuSpriteSheet from './rikuspritesheet.png'
import { connect } from 'react-redux'

function Enemy(props) {
    return (
        <div 
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundImage:  `url('${rikuSpriteSheet}')`,
                backgroundPosition: '0 0',
                width: '50px',
                height:'60px'
            }}
        />
    )
}

function mapStateToProps(state) {
    return {
        ...state.enemy, 
    }
}

export default connect (mapStateToProps) (Enemy)