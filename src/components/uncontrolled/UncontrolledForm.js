import React from 'react'

const UncontrolledForm = () => {
  const nameInput = React.createRef();
  const ageInput = React.createRef();
  const hairColorInput = React.createRef();
  
// What makes this uncontrolled is that the component does not care about what the values of each of these inputs are, until some event occurs. Each of these inputs is handling its own state...until we submit the form...at which point we get all the values
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(nameInput.current.value)
    console.log(ageInput.current.value)
    console.log(hairColorInput.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder='Name' ref={nameInput}></input>
      <input name="age" type="number" placeholder='Age' ref={ageInput}></input>
      <input name="hairColor" type="text" placeholder='Hair Color' ref={hairColorInput}></input>
      <input type="submit" value="Submit"></input>
    </form>
  )
}

export default UncontrolledForm