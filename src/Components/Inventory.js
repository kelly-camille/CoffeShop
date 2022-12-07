import React from 'react';
import PropTypes from "prop-types";

function Inventory(props){

  if(props.stock < 0) {
    return (
      <React.Fragment>
      <div onClick = {() => props.whenInventoryClicked(props.id)}>
   <h3>{props.name}</h3>
     <p>Out of stock</p>
     </div>
  </React.Fragment>
    )
  } else {

  return (
    <React.Fragment>
        <div onClick = {() => props.whenInventoryClicked(props.id)}>
     <h3>{props.name}</h3>
       <p>{props.stock} lbs </p>
       <ul>
      <li>origin: {props.origin}</li>
      <li>roast: {props.roast}</li>
      <li>price/lb: {props.price}</li>
      </ul>
       </div>
    </React.Fragment>
  );
}
}

Inventory.propTypes = {
  name: PropTypes.string,
  stock:PropTypes.number,
  id: PropTypes.string,
  whenInventoryClicked: PropTypes.func
}

export default Inventory;