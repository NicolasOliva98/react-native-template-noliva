import { useState, useEffect } from "react";

const useLoading = (time = 500) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, time);
  }, []);
  return { loading };
};
export default useLoading;
