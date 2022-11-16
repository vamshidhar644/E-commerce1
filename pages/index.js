import React from 'react';

import { Product, FooterBanner, HeroBanner } from '../components';
import { client } from '../lib/client';

const Home = ({Products, BannerData}) => {
  return (
    <>
      <HeroBanner HeroBanner={BannerData.length && BannerData[0]}/>

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div> 
      <div className='products-container '>
        {Products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>

      <FooterBanner FooterBanner={BannerData &&  BannerData[0]}/>
    </>
  ) 
}

export const getServerSideProps = async () => {
  const ProductQuery = '*[_type == "product"]';
  const Products = await client.fetch(ProductQuery);
  
  const BannerQuery = '*[_type == "banner"]';
  const BannerData = await client.fetch(BannerQuery);
  
  return {
    props: {Products, BannerData}
  }
}

export default Home