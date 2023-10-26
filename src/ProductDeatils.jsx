import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function ProductDeatils() {

    let url = useLocation();
    let currentLocation = url.pathname.split('/')[2];
    console.log(currentLocation)
    const [singleData, setsingleData] = useState({})
    const [Images, setImages] = useState([])

    useEffect(() => {

        axios.get(`https://dummyjson.com/products/${currentLocation}`)
            .then((response) => {

                setsingleData(response.data)
                setImages(response.data.images)
                console.log(response.data.images)

            })
    }, [currentLocation])

    setTimeout(() => {
        console.log(Images);
    }, 1000);
    return (
        <div className="container-fluid py-5 bg-body-secondary">
            <div className='container'>
                <Link to={'/'} className='btn btn-danger'> back to Home</Link>
                {(singleData !== undefined || singleData !== null || singleData !== "") ?
                    <div className='row pt-3'>
                        <div className="col-lg-6">
                            <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" alt="" className='img-fluid' />
                        </div>
                        <div className="col-lg-6">
                            <h4>{singleData.title}</h4>
                            <p>{singleData.description}</p>
                            <p>Price ${singleData.price}</p>
                            <p>Rating ${singleData.rating}</p>

                        </div>
                    </div> :
                    "No data"
                }
            </div>
        </div>
    )
}
