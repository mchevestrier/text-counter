import { useEffect, useState } from "react";

export default function useService<T extends Array<unknown>, U>(fn: (...args: T) => Promise<U>, args: T) {
  const [data, setData] = useState<U | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fn(...args)
      .then((result) => {
        setData(result);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setError(true);
        setData(null);
        setLoading(false);
      });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fn, ...args]);

  return {data, loading, error};
}
