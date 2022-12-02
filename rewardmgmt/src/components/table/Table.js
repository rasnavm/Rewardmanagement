import React from 'react';
import tableconfigNew from './tableconfig';
import TableRow from './TableRow';

function TableNew(props) {


  return (
    
        <main>
        <div className="table-container">
            <table className="styled-table2">
                <thead>
                <tr> <th style={{color:"black",backgroundColor:"#BDEAD5",border:"5px",borderColor:"white"}} colSpan="3" align='center' >Transactions</th></tr>
                <tr>
                { tableconfigNew.HeaderColumns.map((column,index)=><th key={index}>{column.label}</th>)}
                </tr></thead>
                <tbody>
                    {props.data.map((row,index)=>
                    <TableRow key={index} data={row}></TableRow>
                    )}
                </tbody>
            </table>
            </div>
        </main>
    
  )
}

export default TableNew;