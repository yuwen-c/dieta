import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './LevelTable.css';
// https://www.npmjs.com/package/react-super-responsive-table

const LevelTable = (data) => {
    // console.log("activity", activity, "exercise", exercise)
    // console.log("data",data)
    // console.log("data.data",data.data)
    return (
        <div className="ph2 pb2">
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
                    data.data.map((item, index) => {
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

export default LevelTable;

