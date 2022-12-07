import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditInventoryForm (props) {
  const { inventory } = props;

  function handleEditInventoryFormSubmission(event) {
    event.preventDefault();
    props.onEditInventory({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      price: event.target.price.value,
      stock: parseInt(event.target.stock.value),
      id: inventory.id
    })
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditInventoryFormSubmission}
        buttonText="Update Inventory" />
    </React.Fragment>
  );
}


EditInventoryForm.propTypes = {
  inventory: PropTypes.object,
  onEditinventory: PropTypes.func
};
export default EditInventoryForm;