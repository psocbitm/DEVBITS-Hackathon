import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div>
      <Navbar />
      {children}
      </div>
      <Footer />
    </div>
  );
}
