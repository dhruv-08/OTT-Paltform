import { Movie } from '@material-ui/icons';
import React from 'react'

function Modal({movie}) {
    console.log(movie.id);
    return (
        <div>
           <h1>{movie?.name || movie?.title || movie?.original_name}</h1> 
        </div>
    )
}

export default Modal
