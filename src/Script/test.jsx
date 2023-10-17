import React, {useEffect, useState} from 'react';

const Test = () => {
    const [data , setData] = useState(null)
    const [cal, setCal] = useState('')
    const [cal2, setCal2] = useState('')



    const caluclator2 =()=>{
        setCal(event.target.value)
    }
    const caluclator3 =()=>{
        setCal2(event.target.value)
    }

useEffect(()=>{
    const fetchData =async()=>{
        try {
            const table ='A';
            const response = await fetch(`http://api.nbp.pl/api/exchangerates/tables/${table}/`);
            const responseData = await response.json();
            setData(responseData);
            console.log(data);
        } catch (error){
            console.log('this is error',error);
        }
    }
    fetchData()
},[])

    return (
        <div>
            {data && <pre>{JSON.stringify(data ,null, 2)}</pre>}
            <ul>
                {data && data[0].rates.map((item, index)=>(<li key={index}>
                    <h3>{`${item.currency}`}</h3>
                    <p>{`${item.mid}`}</p>
                </li>))}
            </ul>
            <h1>{cal}</h1>
            <select onChange={caluclator2}>
                {data && data[0].rates.map((item ,index)=>(
                    <option key={index} value={`${item.mid}`} >{`${item.code}`}</option>
                ))}
            </select>
            <h1>{cal2}</h1>
            <select onChange={caluclator3}>
                {data && data[0].rates.map((item ,index)=>(
                    <option key={index} value={`${item.mid}`} >{`${item.code}`}</option>
                ))}
            </select>

            <h1 style={{color:'red'}}>{cal/cal2}</h1>

        </div>
    );
};

export default Test;