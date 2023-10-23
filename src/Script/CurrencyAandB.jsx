import React, {useEffect, useState} from 'react';



const CurrencyAandB = () => {
    const [dataA , setDataA] = useState(null)
    const [dataB , setDataB] = useState(null)
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
            const response = await fetch(`http://api.nbp.pl/api/exchangerates/tables/A/`);
            const responseData = await response.json();
            setDataA(responseData);
            console.log(dataA);
        } catch (error){
            console.log('this is error',error);
        }
    }
    const fetchDataB =async()=>{
        try {
            const response = await fetch(`http://api.nbp.pl/api/exchangerates/tables/B/`);
            const responseData = await response.json();
            setDataB(responseData);
            console.log(dataB);
        } catch (error){
            console.log('this is error',error);
        }
    }
    fetchData()
    fetchDataB()
},[])

    return (
        <div style={{display:"flex",justifyContent:'space-around'}}>
            <div>
            <select onChange={event => calculatorCurrencyRight(event.target.value)}>
                {dataA && dataA[0].rates.map((item ,index)=>(
                    <option key={index} value={`${item.mid}`} >{`${item.currency}`}</option>
                ))}
                {dataB && dataB[0].rates.map((item,index)=>(
                    <option key={index} value={`${item.mid}`}>{`${item.currency}`}</option>
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
            <select onChange={event => calculatorCurrencyLeft(event.target.value)}>
                {dataA && dataA[0].rates.map((item ,index)=>(
                    <option key={index} value={`${item.mid}`} >{`${item.currency}`}</option>
                ))}
                {dataB && dataB[0].rates.map((item,index)=>(
                    <option key={index} value={`${item.mid}`}>{`${item.currency}`}</option>
                ))}
            </select>
            </div>



        </div>
    );
};

export default CurrencyAandB;