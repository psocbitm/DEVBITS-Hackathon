import Link from "next/link";
import MutualFunds from "./MutualFunds";
import Stocks from "./Stocks";
export default function HeroSection() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-8 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-28">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Your Financial Brokerage Partner
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Invest in Stocks, Mutual Funds, Bonds and more
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Invest with confidence and achieve your financial goals with our
              expert guidance. We offer personalized investment advice and
              access to a wide range of financial instruments such as stocks,
              bonds, mutual funds, and more.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <Link
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
