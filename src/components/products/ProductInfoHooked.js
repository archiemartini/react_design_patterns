import React from 'react'
import useResource from '../../hooks/useResource'

const ProductInfoHooked = ({ productId }) => {
  const product = useResource(`/products/${productId}`)
  const { name, price, description, rating } = product || {}

  return product ? (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Descrption:</h3>
      <p>{description}</p>
      <p>Average Rating: {rating}</p>
    </>
  ) : <p>Loading...</p>
}

export default ProductInfoHooked;