import Footer from "@/components/footer";
import GlobalNav from "@/components/global-nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalNav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
