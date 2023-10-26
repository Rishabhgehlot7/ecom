import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
function App() {

  const [catData, setcatData] = useState([])
  const [products, setProducts] = useState([])
  const [myCat, setMyCat] = useState('')

  const getCategory = () => {
    axios.get('https://dummyjson.com/products/categories')
      .then(function (response) {
        console.log(response);
        setcatData(response.data)
      })
  }

  let getProduct = (catname = "") => {
    let apiUrl;
    if (catname === "") {
      apiUrl = "https://dummyjson.com/products/"
    }
    else {
      apiUrl = `https://dummyjson.com/products/category/${catname}`
    }
    axios.get(apiUrl)
      .then(function (response) {

        setProducts(response.data.products)
      })
  }

  useEffect(() => {
    getCategory()
    getProduct()
  }, []);




  return (

    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="navbar-brand" href="#" style={{ cursor: "pointer" }} onClick={() => {
            getProduct("")
          }}>Ecom</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container-fluid py-5 bg-body-secondary">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className='border border-dark p-2'>
                <h3>Category</h3>
                <ul className="list-group">
                  {
                    catData.length >= 1 ?
                      catData.map((v, i) => {
                        return (
                          <li className="list-group-item" style={{ cursor: "pointer" }} onClick={() => {
                            getProduct(v)
                          }}>{v}</li>
                        )
                      }) :
                      "No Data"
                  }
                </ul>
              </div>
            </div>

            <div className="col-lg-9">
              <h3 className='text-center'>Our Products</h3>
              <div className='row gy-3'>

                {
                  products.length >= 1 ?
                    products.map((v, i) => {
                      return (
                        <div className="col-lg-4 ">
                          <div className="card" >
                            <img src={v.thumbnail} style={{ height: "200px", width: "100%" }} className="card-img-top border " alt="..." />
                            <div className="card-body">
                              <h5 className="card-title">{v.title}</h5>
                              <p className="card-text">Price: {v.price}$ | {v.category}</p>
                              <Link to={`/ProductDeatils/${v.id}`} className="btn btn-primary">Check Now</Link>
                            </div>
                          </div>
                        </div>
                      )
                    }) :
                    "No data"
                }
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default App;
