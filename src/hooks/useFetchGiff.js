import { useState, useEffect } from "react"
import { GetGift } from "../helpers/GetGift";

export const useFetchGiff = (categoriaGF) =>{


    const [imagen, setImagen] = useState({
        data:[],
        loading : true
    });

    useEffect(() => {
        // GetGift(categoriaGF).then(img =>setImagen(img))          
        GetGift(categoriaGF).then(img =>
            setTimeout( ()=>{         
                setImagen({
                    data:img,
                    loading : false
                })                
            }, 3000)
            )
    }, []);

    // console.log(imagen); 
   
    // setTimeout(()=>{
    //     setImagen({
    //         data:[1, 2,4],
    //         loading: false
    //     })
    // },3000);

    
    return imagen; // {data:[], loading:true}
}
