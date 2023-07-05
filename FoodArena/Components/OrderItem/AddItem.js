import React, { useState, useContext } from 'react';
import Table from './Table';
import Button from '../UI/Button';
import './AddItem.css';
import Input from './Input';
import OrderContext from '../Context/OrderContext';

const AddItem = () => {
  // const { orderTaken } = useContext(OrderContext); 
  const ctx = useContext(OrderContext);

  const [selectedTable, setSelectedTable] = useState('');
  const [dish, updateDish] = useState('');
  const [amount, updateAmount] = useState(0);
  const [formIsValid, setFormIsValid] = useState(false);

  const tableHandler = (table) => {
    setSelectedTable(table);
  };

  const setDish = (event) => {
    updateDish(event.target.value);
    setFormIsValid(event.target.value.trim().length > 1 && amount > 0);
  };

  const setAmount = (event) => {
    updateAmount(event.target.value);
    setFormIsValid(dish.trim().length > 1 && event.target.value > 0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      id: Math.random(),
      dish: dish,
      table: selectedTable,
      amount: amount,
    };
    ctx.orderTaken(order); 

    setSelectedTable('');
    updateDish('');
    updateAmount(0);
    setFormIsValid(false)
  };

  return (
    <>
       <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <Table onChange={tableHandler} />
        </div>
        <Input 
          label="Enter Dish"
          id="dish"
          type="text"
          value={dish}
          onChange={setDish}
        />
        <Input 
          label="Amount"
          id="amount"
          type="number"
          value={amount}
          onChange={setAmount}
        />
        <div className="form-group">
          <Button className="button" type="submit" disabled={!formIsValid}>
            Add Item
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddItem;
