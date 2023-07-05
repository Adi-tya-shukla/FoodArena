import React, { useState } from 'react';
import Header from './Components/UI/Header';
import Footer from './Components/UI/Footer';
import AddItem from './Components/OrderItem/AddItem';
import TableBill from './Components/Tables/TableBill';
import OrderContext from './Components/Context/OrderContext';

import './App.css';

function App() {
  const [orders, setOrders] = useState([]);

  const orderTaken = (order) => {
    localStorage.setItem(order.id, JSON.stringify(order));
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  const onRemove = (orderId) => {
    localStorage.removeItem(orderId);
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        orderTaken,
        onRemove
      }}>
      <React.Fragment>
        <div className="app-container">
          <Header />
          <div className="content">
            <AddItem />
            <TableBill />
          </div>
          <Footer />
        </div>
      </React.Fragment>
    </OrderContext.Provider>
  );
}

export default App;
