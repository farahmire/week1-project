import {  takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';



function* fetchStockPrice(action) {
  try {
   const response = yield axios.post('/api/stock/symbol', action.payload);
   yield put({ 
      type: 'FETCH_STOCK_SUCCESS', 
      payload: response.data });
  } catch (error) {
    console.log('FETCH STOCK PRICE saga get request failed', error);
  }
}

function* priceSaga() {
    yield takeLatest('FETCH_PRICE', fetchStockPrice);
  }


    export default priceSaga;

