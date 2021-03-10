import React from 'react'
import { SPRITE_HEIGHT, SPRITE_WIDTH } from '../../config/constants'
import './styles.css' 

function getTileSprite(type) {
    switch(type) {
        case 0:
            return 'sand'
        case 1: 
            return 'water'
        case 2: 
            return 'palmtree'
        case 3: 
            return 'chest'
    }
}

function MapTile(props) {
    return <div 
        className={`tile =${getTileSprite(props.tile)}`}
        style={{
            height: SPRITE_HEIGHT,
            width: SPRITE_WIDTH
        }}
    />
}

function MapRow(props) {
    return <div className='row'>
        { 
        props.tiles.map( tile => <MapTile tile={tile} />)
        }
        </div>
}

function Map(props) { 
    return (
        <div
            style={{
                width: '600px',
                height: '600px',
                border: '4px solid white',
            }}
        >
            {
                props.tiles.map( row => <MapRow tiles={row} /> )
            }
        </div>
    )
}

export default Map