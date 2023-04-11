
import React from 'react';
import useTextField from './useTextField';

function GoodMorning() {
  const [firstName, handleFirstNameChange] = useTextField('');
  const [lastName, handleLastNameChange] = useTextField('');

  const name = `${firstName} ${lastName}`;
  const greeting = name ? `Good morning, ${name}!` : '';

  return (
    <div>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </label>
      <p>{greeting}</p>
    </div>
  );
}

export default GoodMorning;
