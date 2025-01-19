import React, { useState } from "react";

const useMutation = (promise) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const execute = async (paload) => {
    try {
      setLoading(true);
      const res = await promise(paload);
      if (res?.data) {
        setData(res.data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    execute,
    data,
    error,
    loading,
  };
};

export default useMutation;
