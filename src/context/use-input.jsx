import { useState } from 'react';

const useInput = (validation) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsvalid = validation(value);
  const valueInputIsValid = isTouched ? valueIsvalid : true;

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };
  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };
  const resetValue = () => {
    setIsTouched(false);
    setValue('');
  };
  return {
    value,
    valueIsvalid,
    valueInputIsValid,
    resetValue,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
