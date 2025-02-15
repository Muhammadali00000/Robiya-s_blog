import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolios.scss';

const portfolios = [
  { id: 1, name: 'BAPE', image: './image 2.png' },
  { id: 2, name: 'Sony', image: './image 2.png' },
  { id: 3, name: 'Uber', image: './image 2.png' },
  { id: 4, name: 'Apple', image: './apple1.svg' },
  { id: 5, name: 'The North Face', image: './image 2.png' },
  { id: 6, name: 'Nike', image: './image 2.png' },
  { id: 7, name: 'Off-White™', image: './off.svg' },
  { id: 8, name: 'Stussy', image: './image 2.png' },
  { id: 9, name: 'Nothing', image: './image 2.png' },
];

const Portfolios = () => {
  return (
    <section className='portfolio'>
      <div className='container'>
        <div className='portfolio__wrapper'>
          {portfolios.map((item) => (
            <div className="porfolio">
            <div key={item.id} className={`portfolio__card-${item.id}`}>
              <Link className='imgg' to={`/portfolio/${item.id}`}>
                <img className='portfolio_img' src={item.image} alt={item.name} />
              </Link>
              
            </div>
            <h3 className='porfolio_h3'><span>*</span>{item.name}</h3>
            </div>
            
            
          ))}
        </div>
        
        <button className='portfolio_btn'>See More</button>
      </div>
    </section>
  );
};

export default Portfolios;
