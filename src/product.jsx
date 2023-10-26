import React from 'react'

export default function product() {
    return (
        <div className="container-fluid py-5 bg-body-secondary">
            <div className='container'>
                <button className='btn btn-danger'> back to Home</button>
                <div className='row mt-5'>
                    <div className="col-lg-6">
                        <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <h4>title</h4>
                        <p>discription</p>
                        <p>Price</p>
                        <p>Rating</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
