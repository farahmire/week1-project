import React from 'react';
import { Provider } from 'react-redux';
import store from '../../src/redux/sagas/store';
import StockPrice from '../components/StockPrice/StockPrice';

function App() {
  return (
    <Provider store={store}>
      <StockPrice />
    </Provider>
  );
}

export default App;
