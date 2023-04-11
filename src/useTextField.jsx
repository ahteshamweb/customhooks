import { useState } from 'react';

function useTextField(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(event) {
    setValue(event.target.value);
  }

  return [value, handleChange];
}

export default useTextField;
