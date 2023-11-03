import React, { useState, useEffect } from 'react';

const ControlledForm = () => {
  const [nameInputError, setNameInputError] = useState('')
  const [name, setName] = useState('');
  const [age, setAge] = useState('')
  const [hairColor, setHairColor] = useState('')

  useEffect(() => {
    if (name.length < 4) {
      setNameInputError('Name must be four or more characters.')
    } else {
      setNameInputError('')
    }
  }, [name])

  return (
    <form>
      {nameInputError && <p>{nameInputError}</p>}
      <input 
        name="name" 
        type="text" 
        placeholder='Name' 
        value={name} 
        onChange={e => setName(e.target.value)}
      ></input>
      <input 
        name="age" 
        type="number" 
        placeholder='Age' 
        value={age} 
        onChange={e => setAge(e.target.value)}
      ></input>
      <input 
        name="hairColor" 
        type="text" 
        placeholder='Hair Color' 
        value={hairColor} 
        onChange={e => setHairColor(e.target.value)}
      ></input>
      <input type="submit" value="Submit"></input>
    </form>
  )
}

export default ControlledForm