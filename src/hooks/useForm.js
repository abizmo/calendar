import { useState } from 'react';

const useForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState);

  const changeInputs = ({ name, value }) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const resetInputs = () => setFormValues(initialState);

  return [formValues, changeInputs, resetInputs];
};

export default useForm;
