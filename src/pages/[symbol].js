import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Stock() {
  const router = useRouter();
  const { symbol, code } = router.query;

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
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {stockData?.name || symbol}
        </h1>
        <p className="text-lg font-medium text-gray-500">{code}</p>
      </header>
      {isLoading ? (
        <div className="w-full h-80 flex justify-center items-center">
          <div className="w-56 mx-auto my-4 bg-white rounded-lg p-4 shadow-md animate-pulse">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-8 bg-gray-400 rounded mb-4"></div>
          </div>
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <p className="text-xl font-medium">Price</p>
              <p className="text-3xl font-bold tracking-tight text-gray-900">
                {stockData.price}
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <p className="text-xl font-medium">Market Cap</p>
              <p className="text-3xl font-bold tracking-tight text-gray-900">
                {Number(stockData.marketCap).toLocaleString()}
              </p>
            </div>
          </div>
          <div className="my-8">
            <p className="text-lg font-medium mb-4">
              About {stockData.name || symbol}
            </p>
            <p className="text-gray-500">
              {stockData.description || "No information available."}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
