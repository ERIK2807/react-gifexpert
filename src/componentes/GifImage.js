import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const GifImage = ({id, titulo,url}) => {
    
    return (
        <div className='card'>
            <img src={url} alt={titulo}></img>
            <p>{titulo}</p>
        </div>
    )
}
