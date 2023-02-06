import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const StockPrice = () => {
  const currentPrice = useSelector(state => state.stock.currentPrice);
  const dispatch = useDispatch();
  const [symbol, setSymbol] = useState('');



  const handleSubmit = (event) => {
    // console.log('THIS is the payload im sening over ', payload)
    console.log(sym)
    event.preventDefault();
    dispatch({
      type: 'FETCH_PRICE',
      payload: {
        symbol,
      },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={symbol}
          onChange={(event) => setSymbol(event.target.value)}
        />
        <button type="submit">Look Up Stock</button>
      </form>
      <h2>Current Price of {symbol}: ${currentPrice}</h2>
    </div>
  );
};

export default StockPrice;