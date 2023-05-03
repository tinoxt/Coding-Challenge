import React from 'react';

function Person({ person }) {
  return (
    <li>
      {person.name}, {person.age} years old
    </li>
  );
}

export default Person;
