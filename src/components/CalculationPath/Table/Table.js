import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
 
const TableExample = () => {
  return (
    <Table>
      <Thead>
        <Tr className="stripe-dark">
          <Th>Type</Th>
          <Th>Low</Th>
          <Th>Mideum</Th>
          <Th>High</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr className="stripe-dark">
          <Td>Steps</Td>
          <Td>6,000</Td>
          <Td>10,000</Td>
          <Td>20,000</Td>
        </Tr>
        <Tr className="stripe-dark">
          <Td>Mounting</Td>
          <Td>0.5h</Td>
          <Td>1h</Td>
          <Td>2h</Td>
        </Tr>
        <Tr className="stripe-dark">
          <Td>Climbing stairs</Td>
          <Td>0.5h</Td>
          <Td>1h</Td>
          <Td>2h</Td>
        </Tr>
        <Tr className="stripe-dark">
          <Td>Walking</Td>
          <Td>1h</Td>
          <Td>2h</Td>
          <Td>3h</Td>
        </Tr>
        <Tr className="stripe-dark">
          <Td>House cleaning</Td>
          <Td>1h</Td>
          <Td>2h</Td>
          <Td>3h</Td>
        </Tr>
        <Tr className="stripe-dark">
          <Td>Biking</Td>
          <Td>1h</Td>
          <Td>2h</Td>
          <Td>3h</Td>
        </Tr>
      </Tbody>
    </Table>    
  );
}


export default TableExample;