import React from "react";
import Head from "next/head";
import Nav from "../components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => (
  <div className="text-sans">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav title={"Livraria Online"} />

    <div className="w-full text-gray-900">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="m-0 w-full pt-20 leading-tight text-5xl text-center font-extralight"
      >
        Bem vindo a Livraria Online
      </motion.h1>

      <div className="max-w-4xl mx-auto pt-20 py-auto pb-8 flex flex-row justify-around">
        <Link href={"./list"}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="pt-4 px-5 pb-6 w-64 text-left no-underline rounded-lg text-gray-800 border border-orange-400 hover:border-orange-500 shadow-lg shadow-orange-300"
          >
            <h3 className="m-0 text-orange-400 text-lg font-bold">
              Lista dos livros cadastrados &rarr;
            </h3>
          </motion.div>
        </Link>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://nextjs.org/learn"
          className="pt-4 px-5 pb-6 w-64 text-left no-underline rounded-lg text-gray-800 border border-orange-400 hover:border-orange-500 shadow-lg shadow-orange-300"
        >
          <h3 className="m-0 text-orange-400 text-lg font-bold">
            Next.js Learn &rarr;
          </h3>
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://github.com/zeit/next.js/tree/master/examples"
          className="pt-4 px-5 pb-6 w-64 text-left no-underline rounded-lg text-gray-800 border border-orange-400 hover:border-orange-500 shadow-lg shadow-orange-300"
        >
          <h3 className="m-0 text-orange-400 text-lg font-bold">
            Examples &rarr;
          </h3>
        </motion.a>
      </div>
    </div>
  </div>
);

export default Home;
