import React from 'react'
import {GifImage} from './GifImage'
import { useFetchGiff } from '../hooks/useFetchGiff'

export const GifGrid = ({categoriaGF}) => {
    //hook UseFetchGiff
    const {data:imagen, loading} = useFetchGiff(categoriaGF);
    return (
        <>
        <h2>{categoriaGF}</h2>
        { loading&&<p>Cargando...</p>}
        <div className='cardGrid'>
            {   
                imagen.map( imagen =>
                    <GifImage 
                    key={imagen.id}
                    {...imagen}
                    />
                )
            }      
        </div> 
        </>
    )
}