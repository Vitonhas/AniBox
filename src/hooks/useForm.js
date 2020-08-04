import { useState } from 'react';

function useForm(valoresInciais) {
  const [values, setValues] = useState(valoresInciais);
  function setValue(keyValue, Svalue) {
    setValues({
      ...values,
      [keyValue]: Svalue,
    });
  }

  function handleChange(info) {
    setValue(
      info.target.getAttribute('name'),
      info.target.value,
    );
  }

  function clearForm() {
    setValues(valoresInciais);
  }

  return {
    handleChange,
    values,
    clearForm,
  };
}

export default useForm;
