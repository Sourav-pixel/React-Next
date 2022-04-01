import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <div>
             <section id="hero" className="d-flex h-100 ">
<div className="container ">
  <div className="row">
  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 text-center mx-auto my-auto ">
            <h1 className="text-center fw-bolder text-success  mx-md-4 mt-4 justify-content-center primetxt"> Get Growing</h1>
            <h3 className=" mx-1 mx-md-4 mb-3 mt-4 text-center  text-dark  shadow-sm" >Complete more jobs faster</h3>
            <h3 className=" mx-1 mx-md-4 mb-3 mt-4 text-center text-dark shadow-sm" >Streamline operations</h3>
            <h3 className=" mx-1 mx-md-4 mb-3 mt-4 text-center text-dark shadow-sm" >Increase profitability</h3>
                     <div className="d-flex justify-content-center mx-4 mb-lg-4 mb-2">
                     <form class="form-inline my-2 my-lg-0">
                     <form class="form-inline my-2 my-lg-0">
                    
      <input class="form-control mr-sm-2" type="search" placeholder="email id" aria-label="Search"></input> <a class="btn btn-warning my-3" href="#Home" role="button">Request Demo</a>
      
    </form>
    </form> 
            </div>
          </div>
    <div className="col-lg-6 order-1 order-lg-2 hero-img  text-center" data-aos="zoom-in" data-aos-delay="200">
      <img src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png" className="img-fluid animated" alt=""/>
    </div>
  </div>
</div>

</section>

        </div>
    )
}