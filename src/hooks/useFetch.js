import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch(url);
      const data = await resp.json();

      setLoading(false);
      setResponse(data);
    })();
  }, [url]);

  return [loading, response];
};
