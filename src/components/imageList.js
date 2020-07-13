import React from 'react';
import './imageList.css';
import ImageCard from './ImageCard';


const ImageList = (props) => {

    //console.log(props);
    //Lec 97  map()
   const list = props.images.map((image) => {

       return <ImageCard key={image.id} image={image} />;   // We assign a "key" to the root property(div, p, img) every time we are returning a list of objects Lec100
    });
    
    return <div className='image-list'>{list}</div>;
};



export default ImageList;