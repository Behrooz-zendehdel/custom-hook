import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [error, setError] = useState(null);
  const [loading, setLoding] = useState(false);
  const [data, setdata] = useState(null);

  useEffect(() => {
    setLoding(true);
    setdata(null);
    setError(null);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setLoding(false);
        setdata(res.data);
      })
      .catch((err) => {
        setLoding(false);
        setError(err.message);
      });
  }, [url]);
  return { loading, error, data };
};
export default useFetch;
