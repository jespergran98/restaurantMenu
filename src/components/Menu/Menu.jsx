import React from 'react';
import Dish from '../Dish/Dish';
import './Menu.css';

const Menu = ({ dishes }) => {
  const categories = ['Forrett', 'Hovedrett', 'Dessert'];
  
  const groupedDishes = categories.reduce((acc, category) => {
    acc[category] = dishes.filter(dish => dish.kategori === category);
    return acc;
  }, {});

  return (
    <div className="menu">
      <header className="menu__header">
        <h1 className="menu__title">Vår Meny</h1>
        <p className="menu__subtitle">
          Autentiske smaker tilberedt med lidenskap og dedikasjon
        </p>
        <div className="menu__divider"></div>
      </header>

      <div className="menu__content">
        {categories.map(category => (
          groupedDishes[category].length > 0 && (
            <section key={category} className="menu__section">
              <h2 className="menu__category">{category}</h2>
              <div className="menu__grid">
                {groupedDishes[category].map(dish => (
                  <Dish key={dish.id} dish={dish} />
                ))}
              </div>
            </section>
          )
        ))}
      </div>

      <footer className="menu__footer">
        <p>Alle priser er inkludert mva.</p>
      </footer>
    </div>
  );
};

export default Menu;