import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const PricingItem = ({title,price,itemList}) => {
  return (
      <div className="col-xl-4 col-lg-6 mt-30">
          <div className="pricing-item">
              <div className="pricing-item__head">
                  <h2 className="heading-title">{title}</h2>
                  <h4 className="sub-heading-title">Regular Price</h4>
              </div>
              <div className="pricing-item__price"><h2>${price}</h2></div>
              <ul className="pricing-item__lists">
                  <li>Living aboves saying</li>
                  <li>Evening a gather</li>
                  <li>Waters move replenish</li>
                  <li>Lesser land replenis</li>
                  <li>Bear morn divide divided</li>
                  <li>Under beginning</li>
              </ul>
              <a className="price-btn" href="pricing"
              ><span className="icon"><FontAwesomeIcon icon={faArrowRight} /></span
              >select plan</a
              >
          </div>
      </div>
  )
}

export default PricingItem