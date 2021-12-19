import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { Carousel } from 'react-responsive-carousel';
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
  return (

    <div className="bg-gray-100 ">
      <Head>
        <title>Amazon Clone</title>
        <meta name="description" content="Just a small Next.js Project" />
        <link rel="icon" href="/amazon-png-logo-vector-6708.png" />
      </Head>

      <Header />
      <main className= 'max-w-screen-2xl mx-auto'>
         {/*banner*/}
         <Banner/>

         {/*feeds*/}

      <ProductFeed products={products}/> 
      
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products= await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  );
  return{props:
   { products }
  }
}