import React from 'react';
import Ex03_Book from './components/Ex03_Book';

const Ex03_Library = () => {
    return (
        <div>
          <Ex03_Book name="Spring" numPage="300" />
         <Ex03_Book name="Html" numPage="150"/>
         <Ex03_Book name="JPA" numPage="200"/>
        </div>
    );
};

export default Ex03_Library;