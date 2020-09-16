import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './Table.css';
const TableExample = () => {
  return (
    <Table>
      <Thead>
        <Tr className="white bg-mid-gray">
          <Th>Type</Th>
          <Th>Low</Th>
          <Th>Mideum</Th>
          <Th>High</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr className="">
          <Td><span className="pr2">🐾</span>Steps</Td>
          <Td>6,000</Td>
          <Td>10,000</Td>
          <Td>20,000</Td>
        </Tr>
        <Tr className="">
          <Td><span className="pr2">⛰</span>Mounting</Td>
          <Td>0.5h</Td>
          <Td>1h</Td>
          <Td>2h</Td>
        </Tr>
        <Tr className="">
          <Td><span className="pr2">📶</span>Climbing stairs</Td>
          <Td>0.5h</Td>
          <Td>1h</Td>
          <Td>2h</Td>
        </Tr>
        <Tr className="">
          <Td><span className="pr2">🚶</span>Walking</Td>
          <Td>1h</Td>
          <Td>2h</Td>
          <Td>3h</Td>
        </Tr>
        <Tr className="">
          <Td><span className="pr2">🧹</span>House cleaning</Td>
          <Td>1h</Td>
          <Td>2h</Td>
          <Td>3h</Td>
        </Tr>
        <Tr className="">
          <Td><span className="pr2">🚴</span>Biking</Td>
          <Td>1h</Td>
          <Td>2h</Td>
          <Td>3h</Td>
        </Tr>
      </Tbody>
    </Table>    
  );
}


export default TableExample;