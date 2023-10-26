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

            })
    }, [currentLocation])


    return (
        <div className="container-fluid py-5 bg-body-secondary">
            <div className='container'>
                <Link to={'/'} className='btn btn-danger'> back to Home</Link>
                {(singleData !== undefined || singleData !== null || singleData !== "") ?
                    <div className='row pt-3'>
                        {/* <div className="col-lg-6">
                            <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" alt="" className='img-fluid' />
                        </div> */}
                        <div className="col-lg-6">
                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={Images[0]} className="d-block w-100 img-fluid" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Images[1]} className="d-block w-100 img-fluid" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Images[2]} className="d-block w-100 img-fluid" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Images[3]} className="d-block w-100 img-fluid" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Images[4]} className="d-block w-100 img-fluid" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
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
