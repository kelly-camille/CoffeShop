import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function AddInventoryForm(props){

  function handleAddInventoryFormSubmission(event) {
    event.preventDefault();
    props.onNewInventoryCreation({
      name: event.target.name.value,
      stock: event.target.stock.value,
      id: v4()
    });
  }

return(
  <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleAddInventoryFormSubmission}
        buttonText="submit!" />
  </React.Fragment>
);
}

AddInventoryForm.propTypes = {
  onNewInventoryCreation: PropTypes.func
};

export default AddInventoryForm;