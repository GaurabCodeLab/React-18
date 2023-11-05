import {useState, useEffect} from 'react';

function PrintTable({calculateTable}){
    const [rows, setRows] = useState([]);

    useEffect(()=>{
        console.log("Print Table Runs !");
        setRows(calculateTable(5));
    }, [calculateTable]);

    return rows.map((row, index)=>{
        return <p key={index}>{row}</p>
    })

}

export default PrintTable;
