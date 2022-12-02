import './style.css';
import tableConfig from './tableConfig';
import data from '../../curatedData';
import TableRow from './TableRow';

export default function CollapsibleTable(props) {

    return (
        <main>
            <div className="table-container">
               
                    <table className="styled-table">
    <thead>
    <tr> <th style={{color:"black",backgroundColor:"#BDEAD5",border:"5px",borderColor:"white"}} colSpan="6" align='center' >Reward Summary</th></tr>
        <tr><th>{""}</th>{
                            tableConfig.HeaderColumns.map((column,index) => <th key={index}>{column.label}</th>
                        )}</tr> 
                        </thead>
                        <tbody>
                            {props.data && props.data.map((row,index)=> 
                            
                               <TableRow key={index} data={row}/>
                            
                            )}
                            
                        </tbody>
                    </table>
                </div>
            
        </main>

    )

};
