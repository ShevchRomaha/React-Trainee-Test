import React from 'react'

const Cart = ({ordersPrice}) => {
  return (
    <div>
        <p><b>Total Price:</b></p><p>{ordersPrice}</p>
    </div>
  )
}

export default Cart