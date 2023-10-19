import React, {useEffect, useState} from 'react';

const CurrencyC = () => {
    const [data, setData] = useState(null)

    useEffect(()=>{
        const fechData =async ()=>{
            try{
                const table = 'C'
                const response = await fetch(`http://api.nbp.pl/api/exchangerates/tables/${table}/`)
                const responseData = await response.json();
                setData(responseData)
                console.log(data)
            } catch (error){
                console.error('this is error', error)
            }
        }
        fechData()
    },[])
    return (
        <div>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        <ul>
            <div style={{display:'flex',justifyContent:'space-around',border:'3px solid green'}}>
            <h1>Currency</h1>
            <p>Bid Price</p>
            <p>Ask Price</p>
            </div>

            {data && data[0].rates.map((item, index)=>(
                <li key={index}  style={{display:'flex',justifyContent:'space-around', borderBottom:'1px solid red'}}>
                        <h4>{`${item.currency}`}</h4>
                        <p>{`${item.bid}`}zł</p>
                        <p>{`${item.ask}`}zł</p>
                </li>
            ))}
        </ul>
        </div>
    );
};

export default CurrencyC;