import React, { useEffect, useState} from 'react';


const CurrencyB = () => {
    const [data, setData] = useState(null)
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
             const table ='B'
             const response = await fetch(`http://api.nbp.pl/api/exchangerates/tables/${table}/`)
             const responseData = await response.json();
             setData(responseData)
         } catch (error){
             console.log('this is error', error)
         }
     }
     fetchData()
 },[])


    return (


            <div style={{display:'flex',justifyContent:'space-around'}}>

                <div>
                    {/*<h1>{currencyOwned}</h1>*/}
                    <select onChange={event => calculatorCurrencyRight(event.target.value)}>
                        {data && data[0].rates.map((item ,index)=>(
                            <option key={index} value={`${item.mid}`} >{`${item.currency}`}</option>
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
                            <option key={index} value={`${item.mid}`} >{`${item.currency}`}

                            </option>
                        ))}
                    </select>
                </div>




            </div>


    );
};

export default CurrencyB;