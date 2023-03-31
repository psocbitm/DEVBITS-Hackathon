import Layout from "@/components/Layout";
import { UserProvider } from "@/context/UserContext";
import "@/styles/globals.css";
import "../firebase/firebase";
export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
