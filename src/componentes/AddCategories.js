import react, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategories = ({fnCategory})=>{
    
    const [inputvalue, setInputvalue] = useState('Digite la categoria')
    
    const handleInputCat = (e) =>{
        setInputvalue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();     // evita refresh
        
        if(inputvalue.trim().length>2){
        fnCategory( fnCat => [inputvalue,...fnCat])
        setInputvalue('');
        }
    }

    const handleClic = (e) =>{
        if(e){
            setInputvalue('');
        }
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type='text'
                value={inputvalue}
                onChange={handleInputCat}
                onClick={handleClic}
            />
        </form>
        </>
    )
}
AddCategories.propTypes ={
    fnCategory: PropTypes.func.isRequired
}