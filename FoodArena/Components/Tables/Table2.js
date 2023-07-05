import React, { useContext } from "react";
import OrderContext from "../Context/OrderContext";
import Button from "../UI/Button";
import './Table.css';

const Table2 = (props) => {
  const { onRemove } = useContext(OrderContext); 

  const deleteItem = (orderId) => {
    onRemove(orderId); 
  };

  return (
<div className="table-container"> 
     <h3>Table 2 Order List</h3>
      {props.orders.length === 0 ? (
        <p>No orders for Table 2 placed yet.</p>
      ) : (
        <ul>
          {props.orders.map((order, index) => (
            <li key={order.id}>
              <strong>Order {index + 1}:</strong> {order.dish} Amount: {order.amount}
              <Button  className='removebtn' onClick={() => deleteItem(order.id)}> X </Button>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Table2;
