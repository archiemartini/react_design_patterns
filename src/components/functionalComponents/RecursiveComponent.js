import React from 'react'

const isObject = (x) => {
  return typeof x === 'object' && x !== null
}

const RecursiveComponent = ({ data }) => {
  if (!isObject(data)) {
    return <li>{data}</li>
  }

  const pairs = Object.entries(data);

  return (
    <>
      {pairs.map(([key, value]) => (
        <li>
          {key}:
          <ul>
            <RecursiveComponent data={value} />
          </ul>
        </li>
      ))}
    </>
  )
}

export default RecursiveComponent