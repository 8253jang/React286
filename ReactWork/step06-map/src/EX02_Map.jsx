import React from 'react';

const EX02_Map = () => {
    const products = [
        { id: 1, name: 'Apple',  price: 2000 },
        { id: 2, name: 'Banana', price: 1000 },
        { id: 3, name: 'Orange', price: 3000 },
      ];
    return (
        <div>
          <ul>
             {
             products.map(product => (
                <li key={product.id}>
                    {product.name} - {product.price}원
                </li>
            ))}
          </ul>
        </div>
    );
};

export default EX02_Map;