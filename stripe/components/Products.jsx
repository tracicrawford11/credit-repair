import React from 'react'
import './Products.scss'

const Services = ({ services, selectService, history }) => {
  const handlePurchase = serv => () => {
    selectService(serv)
    history.push('/checkout')
  }

  return services.map(serv => (
    <div className="service" key={serv.id}>
      <section>
        <h2>{serv.name}</h2>
        <p>{serv.description}</p>
        <h3>{'$' + serv.price}</h3>
        <button type="button" onClick={handlePurchase(serv)}>
          PURCHASE
        </button>
      </section>
      {/* <img src={prod.img} alt={prod.name} /> */}
    </div>
  ))
}

export default Products