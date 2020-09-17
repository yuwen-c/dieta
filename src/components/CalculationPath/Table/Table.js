import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './Table.css';
import { ActivityTableData, ExerciseTableData } from './TableData';

const TableExample = () => {
    return (
        <div>
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
                {
                    ExerciseTableData.map((item, index) => {
                        return(                    
                            <Tr className="" key={item.Type}>
                              <Td><span role="img" aria-label={item.Type} className="pr2">{item.icon}</span>{item.Type}</Td>
                              <Td>{item.Low}</Td>
                              <Td>{item.Medium}</Td>
                              <Td>{item.High}</Td>
                            </Tr>                    
                        ) 
                    })
                }
                </Tbody>
            </Table>   
        </div>
    );
}


export default TableExample;


        // <Tr className="">
        //   <Td><span className="pr2">⛰</span>Mounting</Td>
        //   <Td>0.5h</Td>
        //   <Td>1h</Td>
        //   <Td>2h</Td>
        // </Tr>
        // <Tr className="">
        //   <Td><span className="pr2">📶</span>Climbing stairs</Td>
        //   <Td>0.5h</Td>
        //   <Td>1h</Td>
        //   <Td>2h</Td>
        // </Tr>
        // <Tr className="">
        //   <Td><span className="pr2">🚶</span>Walking</Td>
        //   <Td>1h</Td>
        //   <Td>2h</Td>
        //   <Td>3h</Td>
        // </Tr>
        // <Tr className="">
        //   <Td><span className="pr2">🧹</span>House cleaning</Td>
        //   <Td>1h</Td>
        //   <Td>2h</Td>
        //   <Td>3h</Td>
        // </Tr>
        // <Tr className="">
        //   <Td><span className="pr2">🚴</span>Biking</Td>
        //   <Td>1h</Td>
        //   <Td>2h</Td>
        //   <Td>3h</Td>
        // </Tr>