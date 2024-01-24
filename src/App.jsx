import React, { useEffect, useState } from "react";
import useGetCurrencyData from "./hooks/useGetCurrencyData";
import InputCurrency from "./components/inputCurrency";
import "./App.css";

function App() {
  const [inp, setInp] = useState("npr");
  const [op, setOp] = useState("usd");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState();
  const currencyData = useGetCurrencyData(inp);
  const currencyList = Object.keys(currencyData);
  useEffect(() => {
    convert();
  }, [inp, op, amount]);
  function convert() {
    setConvertedAmount(amount * currencyData[op]);
  }
  return (
    <>
      <p className="mb-5 text-xl">Currency Converter</p>
      <InputCurrency
        title="Amount"
        curValue={amount}
        onChangeCurValue={(e) => setAmount(e.target.value)}
        onChangeCur={(e) => setInp(String(e.target.value))}
        currList={currencyList}
        def={inp}
      />
      <InputCurrency
        title="Converted Amount"
        curValue={convertedAmount}
        onChangeCurValue={(e) => setConvertedAmount(e.target.value)}
        onChangeCur={(e) => setOp(String(e.target.value))}
        currList={currencyList}
        def={op}
      />
      <button className="bg-gray-200 text-black mt-2" onClick={convert}>
        Convert
      </button>
    </>
  );
}

export default App;
