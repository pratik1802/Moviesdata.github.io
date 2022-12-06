import React from 'react'
import Moviesdata from'./Moviesdata';

const Movies = () => {
  return (
    <>
    <h1 className='text-center my-5'>Golden Jublee</h1>
    <div className='row'>
{
    Moviesdata.map((cval)=>{

        return (
            <>
            <div className='col-md-4 mt-4'>

            <div class="card" style={{width:'18rem'}}>
            <img src={cval.cover} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{cval.name}</h5>
                <p class="card-text">{cval.rating}Some quick example to build on the card title and make something new</p>
                <a href={cval.link} class="btn btn-primary"> Watch</a>
            </div>

            </div>

            </div>
            
            </>
        )
    }
    )
}

    </div>
    </>
  )
}
export default Movies;