import React, {useEffect, useState} from 'react';



const CurrencyA = () => {
    const [data , setData] = useState(null)
    const [currencyOwned, setCurrencyOwned] = useState('')
    const [currencyBay, setCurrencyBay] = useState('')
    const [currencyAmount, setCurrencyAmount] = useState('')



    const calculatorCurrencyRight =(value)=>{
        setCurrencyOwned(value)
    }
    const calculatorCurrencyLeft =(value)=>{
        setCurrencyBay(value)
    }
    const multiplier =(value)=>{
        setCurrencyAmount(value)
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
        <div style={{display:"flex",justifyContent:'space-around'}}>
            {/*{data && <pre>{JSON.stringify(data ,null, 2)}</pre>}*/}
            {/*<ul>*/}
            {/*    {data && data[0].rates.map((item, index)=>(<li key={index}>*/}
            {/*        <h3>{`${item.currency}`}</h3>*/}
            {/*        <p>{`${item.mid}`}</p>*/}
            {/*    </li>))}*/}
            {/*</ul>*/}
            <div>
            {/*<h1>{currencyOwned}</h1>*/}
            <select onChange={event => calculatorCurrencyRight(event.target.value)}>
                {data && data[0].rates.map((item ,index)=>(
                    <option key={index} value={`${item.mid}`} >{`${item.code}`}</option>
                ))}
            </select>
            </div>
            <div>
            <form>
                <input onChange={event => multiplier(event.target.value)} type={"number"}/>
            </form>
            <h1 style={{color:'red'}}>{(currencyOwned/currencyBay)*currencyAmount}</h1>
            </div>
            <div>

            {/*<h1>{currencyBay}</h1>*/}
            <select onChange={event => calculatorCurrencyLeft(event.target.value)}>
                {data && data[0].rates.map((item ,index)=>(
                    <option key={index} value={`${item.mid}`} >{`${item.code}`}</option>
                ))}
            </select>
            </div>



        </div>
    );
};

export default CurrencyA;