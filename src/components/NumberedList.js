import React from 'react'

const NumberedList = ({items, resourceName, itemComponent: ItemComponent,}) => {
  return (
    <>
      {items.map((item, idx) => (
        <div key={idx}>
          <h3>{idx + 1}</h3>
          <ItemComponent {...{ [resourceName]: item}} />
        </div>
      ))}
    </>
  )
}

export default NumberedList