import Link from "next/link";

export default function About() {
  return (
    <main className="mx-auto max-w-7xl p-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="mb-8 text-lg text-gray-700 leading-relaxed">
            We are a team of experienced and knowledgeable brokers who are
            committed to delivering top-notch customer service and innovative
            investment solutions tailored to meet the unique needs and goals of
            each client.
          </p>
          <p className="mb-8 text-lg text-gray-700 leading-relaxed">
            Our mission is to help our clients achieve financial success by
            providing them with the best investment advice and services
            available. We pride ourselves on building long-term relationships
            based on trust, transparency, and collaboration.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md py-10 px-6">
          <h3 className="text-2xl font-bold mb-4">Expertise</h3>
          <p className="mb-8 text-lg text-gray-700 leading-relaxed">
            Our team of brokers has years of experience navigating the financial
            markets and developing cutting-edge investment strategies that
            deliver results. We stay ahead of market trends, so our clients
            don&apos;t have to.
          </p>
          <Link
            href="/services"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Learn More
          </Link>
        </div>
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md py-10 px-6">
          <h3 className="text-2xl font-bold mb-4">Products</h3>
          <p className="mb-8 text-lg text-gray-700 leading-relaxed">
            We offer a range of investment products and services, including
            stocks, bonds, mutual funds, and more. Our investment advisors work
            closely with clients to develop personalized portfolio strategies
            that align with their risk tolerance and financial goals.
          </p>
          <Link
            href="/products"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            View Products
          </Link>
        </div>
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md py-10 px-6">
          <h3 className="text-2xl font-bold mb-4">Client Support</h3>
          <p className="mb-8 text-lg text-gray-700 leading-relaxed">
            We are passionate about providing our clients
            with the highest level of service and support. We believe in
            delivering personalized attention and support to ensure our clients
            have everything they need to achieve their financial goals.
          </p>
          <Link
            href="/contact"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
