import React from 'react';
//import React, { Component } from 'react';

//class Counter extends React.Component {
//class Counter extends Component {
 const Counter = ({ index, score, changeScore }) => {    

      //let index = props.index;
  
      return (
        <div className="counter">
          <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
          <span className="counter-score">{ score }</span>
          <button className="counter-action increment" onClick={() => changeScore(index, +1)}> + </button>
        </div>
      );
  }

  export default Counter;