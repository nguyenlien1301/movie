import React, { useEffect, useState } from "react";

const useQuery = (promise, despendecies = []) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const fetchData = async (query) => {
    setLoading(true);
    try {
      const res = await promise(query);
      if (res?.data) {
        setData(res.data);
      }
    } catch (error) {
      console.log("🚀error---->", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, despendecies);
  return {
    data,
    error,
    loading,
    refetch: fetchData,
  };
};

export default useQuery;
