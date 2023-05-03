import React from 'react';
import Person from './Person';

//function returns a list that is populated with a list item for each person in the array
function PeopleList({ peopleList }) {
  return (
    <ul>
      {peopleList.map((person, index) => (   
        <Person key={index} person={person} />
      ))}
    </ul>
  );
}

export default PeopleList;
