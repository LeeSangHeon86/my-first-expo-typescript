import React, { useState, useEffect } from 'react';

export interface dataType {
  [ID: string]: {
    map(
      arg0: (coin: {
        id: string;
        symbol: string;
        name: string;
        price_usd: string;
      }) => JSX.Element,
    ): React.ReactNode;
    id: string;
    symbol: string;
    price_usd: string;
    name: string;
  };
}

export const useFetch = (url: string) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url);
        const result = await res.json();
        setData(result);
      } catch (e) {}
    };
    getData();
  }, []);

  return data;
};
