import React, { useState } from 'react';
import './App.css';

import PeopleList from './Components/PeopleList';

// An array of people with their names and ages
const people = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 25 },
  { name: "Carol", age: 30 },
  { name: "Dave", age: 35 }
];

function ListOfPeople() {
  const [peopleList] = useState(people);

  // Calculate the average age
  const avgAge = peopleList.reduce
  ((total, person) => total + person.age, 0) / peopleList.length;

  // Find the oldest person 
  const oldestPerson = peopleList.reduce
  ((oldest, person) => (oldest.age > person.age) ? oldest : person);

  // Find the youngest person 
  const youngestPerson = peopleList.reduce
  ((youngest, person) => (youngest.age < person.age) ? youngest : person);

  return (
    <div className="list">
      <h2>List Of People</h2>
      <PeopleList peopleList={peopleList} />
      <p>Average age: {avgAge.toFixed(2)}</p>
      <p>Oldest person: {oldestPerson.name}, {oldestPerson.age} years old</p>
      <p>Youngest person: {youngestPerson.name}, {youngestPerson.age} years old</p>
    </div>
  );
}

export default ListOfPeople;
