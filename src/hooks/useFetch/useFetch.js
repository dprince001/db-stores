import { useState, useEffect } from "react";


const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    try {
      const response = async () => {
        const data = await fetch(url);
        const result = await data.json();
        setData(result.items); 
        setIsPending(false);
      }
      response();
    }
    catch(err) {
      setIsPending(false);
      setError(err.message);
    }
  }, [url])

  return {data, isPending, error}
}

export default useFetch