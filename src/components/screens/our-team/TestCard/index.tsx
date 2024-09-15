'use client'

import './style.css';


const TestCard = () => {

    return (
<div className="row">
  <div className="col-lg-4 col-md-6 col-sm-12">
    <div className="card mb-3">
      <img
        className="card-img-top"
        src="https://i.pinimg.com/564x/34/fd/2c/34fd2c0ed73d58075c257fc16b590f78.jpg"
        alt="Card image cap"
      />
      <div className="product-detail">
        <h5 className="card-title heading text-center">PURE COTTON T-SHIRT</h5>
        <span className="subheading">Mens Formal T-Shirt</span>
        <blockquote>
          <p>'Little Bit Of Description About The Product Like Size Color And Care.'</p>
        </blockquote>
        <button type="button" className="btn btn-outline-dark">BUY NOW</button>
      </div>
    </div>
  </div>
</div>

    )
};

export default TestCard;