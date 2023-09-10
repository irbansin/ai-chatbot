import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchData(url, method = "GET", body = null) {
    setLoading(true);
    setError("");

    try {
      const options = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : null,
      };

      const response = await fetch(url, options);
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Something went wrong");
      }

      setData(responseData);
    } catch (e) {
      setError("Some error occurred");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return [data, loading, error];
}
