import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Link from "next/link";

export default function MutualFunds() {
  const nifty20Symbols = useMemo(
    () => [
      "CANA_ROBE_BLUE_5G17HR",
      "NIPP_INDI_VALU_U6BZO4",
      "PARA_PARI_FLEX_17J17OL",
      "MIRA_ASSE_TAX_1LL4Q98",
      "ICIC_PRU_LIQU_1Z8ZNQ",
      "HDFC_OVER_GR_U0I5G1",
    ],
    []
  );

  const [stockData, setStockData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = nifty20Symbols.map((symbol) =>
          axios
            .get(`/api/stocks?symbol=${symbol}&code=MUTF_IN`)
            .then((response) => ({
              symbol,
              price: response?.data?.price,
            }))
        );
        const stockData = await Promise.all(promises);
        setStockData(stockData);
        setLoading(false);
      } catch (error) {
        setError("An error occurred while fetching data.");
        setLoading(false); // Don't forget to set loading to false on error
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl py-5">
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-10 text-center">
        Invest in MutualFunds
      </p>
      <div className="flex flex-wrap justify-center">
        {isLoading ? (
          <>
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className="w-56 mx-2 my-4 bg-white rounded-lg p-4 shadow-md animate-pulse"
              >
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-8 bg-gray-400 rounded mb-4"></div>
              </div>
            ))}
          </>
        ) : error ? (
          <p>{error}</p>
        ) : (
          stockData.map((data) => (
            <Link key={data.symbol} href={`/${data.symbol}?code=MUTF_IN`}>
              <div
                className="mx-2 my-4 bg-white rounded-lg p-4 shadow-md"
                style={{ flex: "1 0 auto" }}
              >
                <p className="text-xl font-medium">{data.symbol}</p>
                <p className="text-gray-600 mt-2">Price: {data.price}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
