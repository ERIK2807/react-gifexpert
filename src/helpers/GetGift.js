import react from 'react'

export const GetGift = async(categoriaGF)=>{
    //encodeURI no permite que se escapen espacios
    const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoriaGF)}&limit=10&api_key=fE015fVTeSPvlywuXC1dsarQU2LZT99p`;
    const rta = await fetch(url);
    const {data} = await rta.json();  //desestructurado
    const gift = data.map( img =>{
        return{
            id: img.id,
            titulo: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gift; 
}