import React from 'react'
import tableconfigNew from './tableconfig';
import './style.css';
function TableNewRow(props) 
{

const {data}=props;
  return (
    [
          <tr className="collapsible">{tableconfigNew.HeaderColumns.map((column,index)=><td key={index}>{data[column.attr]}</td>)}</tr>  
    ]
  )
}

export default TableNewRow;