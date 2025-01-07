import React, { useState } from "react";

const useMutation = (promise) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const execute = async (paload) => {
    setLoading(true);
    try {
      const res = await promise(paload);
      if (res?.data) {
        setData(res.data);
      }
    } catch (error) {
      console.log("🚀error---->", error);
      setError(error);
    }
  };
  return {
    data,
    error,
    loading,
    execute,
  };
};

export default useMutation;
