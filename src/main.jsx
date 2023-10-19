import React from 'react'
import ReactDOM from 'react-dom/client'
import CurrencyA from "./Script/CurrencyA.jsx";
import CurrencyB from "./Script/CurrencyB.jsx";
import CurrencyC from "./Script/CurrencyC.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CurrencyA />
      <CurrencyB/>
      <CurrencyC/>
  </React.StrictMode>,
)
