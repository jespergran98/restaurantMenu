import React from 'react';
import './Dish.css';

const Dish = ({ dish }) => {
  const imageUrl = `/assets/${dish.id}.webp`;

  return (
    <article className="dish">
      <div className="dish__image-wrapper">
        <img
          src={imageUrl}
          alt={dish.tittel}
          className="dish__image"
          loading="lazy"
        />
        <span className="dish__badge">{dish.kategori}</span>
      </div>
      
      <div className="dish__content">
        <div className="dish__header">
          <h3 className="dish__title">{dish.tittel}</h3>
          <span className="dish__price">{dish.pris}</span>
        </div>
        
        <p className="dish__ingredients">{dish.ingredienser}</p>
      </div>
    </article>
  );
};

export default Dish;