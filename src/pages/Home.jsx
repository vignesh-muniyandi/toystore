import React from 'react'
import './Home.css';
import IMG from "../image/logo (2).png"
import products from '../constant/homepageproduct';
import { Helmet } from 'react-helmet-async';
function Home() {
  
  return (
    <>
    <Helmet>
      <title>Home</title>
      <meta name='description' content='best toys for kids'/>
    </Helmet>
    <div className="home">

      <div className="container1">
        <h1>Welcome to Our Store 🚴</h1>
        <p>
          Discover high-quality products designed for comfort, performance, and
          style. We bring you the best collection at affordable prices.
        </p>
        <button>Shop Now</button>
      </div>

      <br />
      <div className="container3">
        <h1>JOin for US</h1>
        <p>
          Discover high-quality products designed for comfort, performance, and
          style. We bring you the best collection at affordable prices.
        </p>
         
      </div>
      <br />
      <br />

      <br />
      <h1>Our bestProducts</h1>
      <div className="container2">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.img} alt=" " />
            <div className="conetent">
              <h1 className="toy-name">{item.title}</h1>
              <p className="des">{item.des}</p>

              <button className="btn1"> cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Home
