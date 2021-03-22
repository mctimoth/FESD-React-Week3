import '../App.css';
import React, { useState } from 'react';

var addStyle = {
  backgroundColor: 'green',
  color: 'white'
}

function NewEmployeeForm(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState('');

  const displayInfo = () => {
    console.log(`${name} ${age} ${country} ${position} ${wage}`);
  };

  const handleSubmit = (event) => {
    props.addNewEmployee({name, age, country, position, wage});
    event.preventDefault();
}

  return (
    <div className="App">
      <div>
        <label
          className='employee100'>
          Name:
          </label>
        <label      
          className='employee100'>
          Age:
          </label>
        <label      
          className='employee100'>
          Country:
          </label>
        <label      
          className='employee100'>
          Position:
          </label>
        <label      
          className='employee100'>
          Wage (Year):
          </label>
        <label      
          className='employee200'>
          Process
        </label><br></br>
        <input 
          className='employee100'
          type='text'
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          className='employee100'
          type='text'
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          className='employee100'
          type='text'
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <input
          className='employee100'
          type='text'
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <input
          className='employee100'
          type='text'
          onChange={(event) => {
            setWage(event.target.value);
          }}
        />
        <button
          className='employee200'
          type='submit'
          style={addStyle}
          // onClick={displayInfo}
          onClick={handleSubmit}
          // onSubmit={handleSubmit}
        >Add Employee</button>
        <br></br>
      </div>
    </div>
  );
}

export default NewEmployeeForm;