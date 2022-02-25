import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "@/components/Layout";
import Header from "@/components/Section/Header";
import Introduction from "@/components/Section/Introduction";
import Benefit from "@/components/Section/Benefit";
import Product from "@/components/Section/Product";
import Testimonial from "@/components/Section/Testimonial";

export default function Home() {
  return (
    <>
      <Head>
        <title>drone</title>
        <meta name="description" content="drone awesome" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Layout>
        <section>
          <Header />
        </section>
        <section>
          <Introduction />
        </section>
        <section>
          <Benefit />
        </section>
        <section>
          <Product />
        </section>
        <section>
          <Testimonial />
        </section>
      </Layout>
    </>
  );
}
