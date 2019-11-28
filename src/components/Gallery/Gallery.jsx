import React from 'react'
import s from './Gallery.module.css'
import PhotoAlbums from "../PhotoAlbums/PhotoAlbums";

const Gallery = (props) => {
    return(
        <div>
            Gallery
            <PhotoAlbums/>
        </div>
    );
}

export default Gallery;