import React from 'react';

 const Product = ({ name, price }) =>{
    return (
      <div>
        <h2>{name}</h2>
        <p>Price: {price}원 </p>
      </div>
    );
  }

const Ex03_Map = () => {
    const products = [
        { id: 1, name: 'Apple', price: 2000 },
        { id: 2, name: 'Banana', price: 1000 },
        { id: 3, name: 'Orange', price: 3000 },
      ];
    return (
        <div>
        {products.map(product => (
          <Product key={product.id} name={product.name} price={product.price} />
        ))}
      </div>
    );
};

export default Ex03_Map;