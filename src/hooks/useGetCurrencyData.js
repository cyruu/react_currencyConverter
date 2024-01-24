import React, { useEffect, useState } from "react";

function useGetCurrencyData(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
    fetch(url)
      .then((res) => res.json())
      .then((resData) => setData(resData[currency]));
  }, [currency]);
  return data;
}
export default useGetCurrencyData;
