import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { AddCategories } from './componentes/AddCategories';
import { GifGrid } from './componentes/GifGrid';


const GifExpertApp = props => {

    const [categoria, fnCategory] = useState(['OnePunch']);

    return (
        <>
            <h2>GifExpert</h2>
            <AddCategories fnCategory ={fnCategory}/>
            <hr></hr>
            <ol >
                {
                    categoria.map( categoriaGF=>(
                        <GifGrid 
                        key ={categoriaGF}
                        categoriaGF ={categoriaGF}
                        />
                    ))
                }
            </ol>
        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp