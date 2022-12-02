import tableConfig from './tableConfig';
import { useState } from 'react';
import './style.css';

export default function TableRow(props) {
    const [collapse, setCollapse] = useState(true);
    const [icon, setIcon] = useState("+");
    const toggleCollapse = (e)=>{
        e.preventDefault();
        setCollapse(!collapse);
        if (icon=='+'){
            setIcon('-');
        }
        else{
            setIcon("+")
        }
        
       
    }
    const {data} = props;

    return (
        [
        <tr className="collapsible" key={data.custid+data.month+"hdr"}><td onClick={toggleCollapse}>{icon}</td>
        {tableConfig.HeaderColumns.map((column, index)=><td key={index}>{data[column.attr]}</td>)}</tr>,            
            !collapse && data.details != undefined &&
            <tr className="innerTr" key={data.custid+data.month+"dtlhdr"}>{
            tableConfig.CollapsibleColumns.map((columns, index) => [<th>{" "}</th>,<th key={index}>
                                {
                                columns.label
                                }</th>])
            }</tr>,
            !collapse && data.details != undefined &&
            data.details.map((row,index)=>
            <tr className="expandable" key={index}>
                {tableConfig.CollapsibleColumns.map((columns, index) => [<td>{" "}</td>,<td key={index}>{row[columns.attr]}</td>])}
            </tr>
            )
           



  
         ]


    )

};
