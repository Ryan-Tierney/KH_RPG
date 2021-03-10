import React from 'react' 
import Player from '../player'
import Map from '../map'
import Enemy from '../enemy'

import { tiles } from '../../data/maps/1' 

function World(props) {
    return (
        <div
            style={{
                position: 'relative',
                width: '600px',
                height: '600px',
                margin: '20px auto'
            }}>
            <Map tiles={tiles}/>
            <Player/>
            <Enemy/>
        </div>
    )
}

export default World