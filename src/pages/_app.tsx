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
    (function (co, de, n, but, t, e, r) {
      !n[co] && (n[co] = function () {
        (n[co].q = n[co].q || []).push(arguments);
      }); e = t.createElement(but);
      e.async = true; e.src = de; r = t.getElementsByTagName(but)[0];
      r.parentNode.insertBefore(e, r);
    })("CodenButter", "https://buttr.dev/butter.js", window, "script", document);
    window.CodenButter("boot", { siteId: "derawretzo", auto: true });
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
