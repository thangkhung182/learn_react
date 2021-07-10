import React from 'react';
import ProductsAndSuppliers from './components/ProductsAndSuppliers';
import { Provider } from 'react-redux';
import dataStore from './store'

function App() {
  return (
    <Provider store={dataStore}>
      <ProductsAndSuppliers />
    </Provider>
    
  );
}

export default App;
