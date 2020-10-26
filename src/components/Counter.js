import React from 'react';
import PropTypes from 'prop-types';
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

  Counter.propTypes = {
    index: PropTypes.number,
    score: PropTypes.number,
    changeScore: PropTypes.func
  };
  export default Counter;