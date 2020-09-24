import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

import rootReducer from './reducers/index'
import { SELL_MEAT, SELL_VEGETABLE } from './reducers/actionTypes'

function App() {

  // 初期値を設定
  const initialState = {
    reducerMeat: {numOfMeat: 30},
    reducerVegetable: {numOfVegetable: 25}
  }

  const [state, dispatch] = useReducer(rootReducer, initialState)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <button onClick={() => dispatch({type: SELL_MEAT})}>Sell meat</button>
        today's Meat : {state.reducerMeat.numOfMeat}
        <button onClick={() => dispatch({type: SELL_VEGETABLE})}>Sell vegetable</button>
        today's Vegetable : {state.reducerVegetable.numOfVegetable}
      </header>
    </div>
  );
}

export default App;
