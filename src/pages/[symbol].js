import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Stock() {
  const router = useRouter();
  const { symbol,code } = router.query;

  const [stockData, setStockData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/stocks?symbol=${symbol}&code=${code}`
        );
        setStockData(response?.data);
        setLoading(false);
      } catch (error) {
        setError("An error occurred while fetching data.");
        setLoading(false);
      }
    };
    if (symbol) {
      fetchData();
    }
  }, [symbol]);

  return (
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl py-5">
      {isLoading ? (
        <div className="w-56 mx-auto my-4 bg-white rounded-lg p-4 shadow-md animate-pulse">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-8 bg-gray-400 rounded mb-4"></div>
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-10 text-center">
            {stockData.symbol}
          </p>
          <div
            className="mx-auto my-4 bg-white rounded-lg p-4 shadow-md"
            style={{ maxWidth: "400px" }}
          >
            <p className="text-xl font-medium">Price: {stockData.price}</p>
          </div>
        </>
      )}
    </div>
  );
}
