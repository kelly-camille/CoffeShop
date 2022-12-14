import React from "react";
import PropTypes from "prop-types";


function ReusableForm(props) {
  return (
    <React.Fragment>
    <form onSubmit={props.formSubmissionHandler}>
      <input
        type='text'
        name='name'
        placeholder='coffee name' />
      <input
        type='text'
        name='origin'
        placeholder='origin' />
      <input
        type='text'
        name='roast'
        placeholder='roast' />
      <input
        type='text'
        name='price'
        placeholder='price' />
        <input
        type='number'
        name='stock'
        placeholder='lbs of coffee' />
      <button type='submit'>{props.buttonText}</button>
    </form>
    </React.Fragment>

);
}


ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;