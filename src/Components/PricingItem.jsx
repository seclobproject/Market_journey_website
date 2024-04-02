import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { Link } from 'react-router-dom';

const PricingItem = ({ title, price, benifits }) => {
  return (
      <div className="col-xl-4 col-lg-6 mt-30">
          <div className="pricing-item">
              <div className="pricing-item__head">
                  <h2 className="heading-title">{title}</h2>
                  <h4 className="sub-heading-title">Regular Price</h4>
              </div>
              <div className="pricing-item__price"><h2>₹{price}</h2></div>
              <ul className="pricing-item__lists">
                  {benifits && benifits.map((benifit, index) => (
                      <li key={index}>{benifit?.text} : {benifit?.key} </li>
                  ))}
                
              </ul>
              {/* <Link className="price-btn" to=""
              ><span className="icon"><FontAwesomeIcon icon={faArrowRight} /></span
                  >select plan</Link> */}
          </div>
      </div>
  )
}

export default PricingItem