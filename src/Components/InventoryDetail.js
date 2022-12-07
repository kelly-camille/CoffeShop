import React from "react";
import PropTypes from "prop-types";

function InventoryDetail(props){
  const { inventory, onClickingDelete } =  props;

  if(inventory.stock >= 0){
  return(
    <React.Fragment>
      <h1>Inventory Detail</h1>
      <h3>{inventory.name} { inventory.stock } lbs </h3>
      <button onClick={ () => props.onClickingRestock(inventory)}>restock</button>
      <button onClick={ () => props.onClickingSell(inventory)}>sell</button>
      <button onClick={ props.onClickingEdit }>Update Inventory</button>
      <button onClick={()=> onClickingDelete(inventory.id)}> Delete Inventory</button>
    </React.Fragment>
  );
} else {
  return(
    <React.Fragment>
      <h1>{inventory.name} is out of stock</h1>
      <button onClick={ () => props.onClickingRestock(inventory)}>restock</button>
      <button onClick={()=> onClickingDelete(inventory.id)}> Delete Inventory</button>
    </React.Fragment>
  )
}

}

InventoryDetail.propTypes = {
  inventory: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default InventoryDetail;