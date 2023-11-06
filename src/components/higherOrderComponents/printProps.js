import React from 'react'

const printProps = (Component) => {
  return (props) => {
    console.log('Higher Order printProp:', props)
    return (
      <Component {...props}/>
    )
  }
}

export default printProps