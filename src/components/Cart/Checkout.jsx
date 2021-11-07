import React from 'react';
import { CheckoutForm, FormControl, FormActions } from './Checkout.styled';
import useInput from '../../context/use-input';

const validateText = (text) => {
  return text.trim().length > 0;
};

const validatePostalCode = (postal) => {
  if (!isNaN(postal)) {
    return true;
  }

  return postal.trim().length >= 6;
};
const Checkout = (props) => {
  //*Name
  const {
    value: name,
    valueIsvalid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    valueInputIsValid: nameInputIsValid,
    resetValue: nameReset,
    inputBlurHandler: nameInputBlurHandler,
  } = useInput(validateText);

  //*Street
  const {
    value: street,
    valueIsvalid: streetIsValid,
    valueChangeHandler: streetChangeHandler,
    valueInputIsValid: streetInputIsValid,
    resetValue: streetReset,
    inputBlurHandler: streetInputBlurHandler,
  } = useInput(validateText);

  //*City
  const {
    value: city,
    valueIsvalid: cityIsValid,
    valueChangeHandler: cityChangeHandler,
    valueInputIsValid: cityInputIsValid,
    resetValue: cityReset,
    inputBlurHandler: cityInputBlurHandler,
  } = useInput(validateText);

  //*Postal Code
  const {
    value: postal,
    valueIsvalid: postalIsValid,
    valueChangeHandler: postalChangeHandler,
    valueInputIsValid: postalInputIsValid,
    resetValue: postalReset,
    inputBlurHandler: postalInputBlurHandler,
  } = useInput(validatePostalCode);

  let formIsValid = false;

  if (nameIsValid && streetIsValid && cityIsValid && postalIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    nameReset();
    streetReset();
    postalReset();
    cityReset();
  };

  return (
    <CheckoutForm onSubmit={formSubmitHandler}>
      <FormControl valid={nameInputIsValid}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {!nameInputIsValid && (
          <p style={{ color: 'red' }}>Name is Invalid...</p>
        )}
      </FormControl>
      <FormControl valid={streetInputIsValid}>
        <label htmlFor="street">Street:</label>
        <input
          type="text"
          id="street"
          value={street}
          onChange={streetChangeHandler}
          onBlur={streetInputBlurHandler}
        />
        {!streetInputIsValid && (
          <p style={{ color: 'red' }}>Street is Invalid...</p>
        )}
      </FormControl>
      <FormControl valid={postalInputIsValid}>
        <label htmlFor="postal">Postal Code:</label>
        <input
          type="text"
          id="postal"
          value={postal}
          onChange={postalChangeHandler}
          onBlur={postalInputBlurHandler}
        />
        {!postalInputIsValid && (
          <p style={{ color: 'red' }}>Postal Code is Incorrect...</p>
        )}
      </FormControl>
      <FormControl valid={cityInputIsValid}>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={cityChangeHandler}
          onBlur={cityInputBlurHandler}
        />
        {!cityInputIsValid && (
          <p style={{ color: 'red' }}>City is Invalid...</p>
        )}
      </FormControl>
      <FormActions>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button type="submit" disabled={!formIsValid}>
          Confirm
        </button>
      </FormActions>
    </CheckoutForm>
  );
};

export default Checkout;
