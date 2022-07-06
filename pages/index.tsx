import type { NextPage } from "next";
import Head from "next/head";
import { Header, Body, Footer } from "@layout";
import { wrapper } from "../store";
import { fetchProduct } from "../store/slice/product";

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  await store.dispatch(fetchProduct());
  return {
    props: {},
  };
});

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default Home;
