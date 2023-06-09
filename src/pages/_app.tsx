import Footer from "@/components/footer";
import GlobalNav from "@/components/global-nav";
import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import uuid from "react-uuid";
import { Analytics } from "@vercel/analytics/react";
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      localStorage.setItem("userId", uuid());
    }
  }, []);
  return (
    <>
      <Analytics />
      <GlobalNav />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
}
