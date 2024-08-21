import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

    const Item = ({id, name, img, price, stock}) => {
        return (
          <article className="CarItem">
                  <header className="Header">
                      <h2 className="ItemHeader">
                          {name}
                      </h2>
                  </header>
                  <picture>
                      <img src={img} alt={name} className="ItemImg" />
                  </picture>
                  <section>
                      <p className="Info">
                          price: ${price}</p>
                      <p className="Info">
                          stock disponible: {stock}</p>
                  </section>
                  <footer className="ItemFooter">
                    <Link to={`/detalle/${id}`} className="option">Ver detalle</Link>
                  </footer>
              </article>
        )
      }

export default Item //NLP coder