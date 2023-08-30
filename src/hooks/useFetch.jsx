// react
import { useState, useEffect } from "react";
function useFetch(url) {
  const [data, setData] = useState(null);
  const [mainData, setMainData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [filterData, setFilterData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        setMainData(data.data);
        setFilterData(data.data);
        setIsPending(false);
      } catch (err) {
        setIsPending(false);
        setError(err.message);
        console.log(err.message);
      }
    };
    fetchData();
  }, [url]);
  return { data, isPending, error, mainData };
}

export default useFetch;
