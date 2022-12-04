import React from 'react';
import Inventory from './Inventory';
import PropTypes from "prop-types";

// const mainInventoryList =[
//   {
//     name:"broken robot - dark roast",
//     stock: 130 // lbs of coffee or 1 burlap sack
//   },
//   {
//     name:"broken robot - blonde roast",
//     stock: 130
//   }
// ];

function InventoryList(props) {
  return(
    <React.Fragment>
    {props.inventoryList.map((inventory) =>
      <Inventory 
      whenInventoryClicked = { props.onInventorySelection }
      name={inventory.name}
      stock={inventory.stock}
      key={inventory.id}
      id={ inventory.id }/> 
      )}
      </React.Fragment>
  );
}

InventoryList.propTypes = {
  inventoryList: PropTypes.array,
  onInventorySelection: PropTypes.func
};

export default InventoryList;