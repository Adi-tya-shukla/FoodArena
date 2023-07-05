import React, { useContext } from 'react';
import OrderContext from '../Context/OrderContext';
import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';
import './TableBill.css';

const TableBill = () => {
  // const { orders, onRemove } = useContext(OrderContext); 
  const ctx = useContext(OrderContext);

  const table1Orders = ctx.orders.filter((order) => order.table === 'Table 1');
  const table2Orders = ctx.orders.filter((order) => order.table === 'Table 2');
  const table3Orders = ctx.orders.filter((order) => order.table === 'Table 3');

  return (
    <div className="table-bill-container">
      {table1Orders.length > 0 && (
        <div >
          <Table1 
          orders={table1Orders} 
          // onRemove={onRemove} 
          />
        </div>
      )}
      {table2Orders.length > 0 && (
        <div >
          <Table2 
          orders={table2Orders}
          //  onRemove={ctx.onRemove}
            />
        </div>
      )}
      {table3Orders.length > 0 && (
        <div >
          <Table3
           orders={table3Orders} 
          //  onRemove={onRemove} 
           />
        </div>
      )}
      {ctx.orders.length === 0 && <h2>No Order Placed Yet</h2>}
    </div>
  );
};

export default TableBill;
