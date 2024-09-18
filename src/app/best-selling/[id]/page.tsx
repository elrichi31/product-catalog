"use client";
import React, { useEffect, useState } from 'react';
import ProductImages from '../../../components/ProductImages';
import ProductDetails from '../../../components/ProductDetails';
import ProductTabs from '../../../components/ProductTabs';
import { getProductsDetails } from '@/services/api';


const ProductDetailPage = ({params}: any) => {
  const [productData, setProductData] = useState<any>(null);
  useEffect(() => {
    const fetchProductData = async () => {
      const data = await getProductsDetails(params.id);
      console.log(data.data);
      setProductData(data.data);
    };

    fetchProductData();
  }, []);
  if (!productData) {
    return <div>Cargando...</div>; 
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <ProductImages images={productData.product_photos} />
        <ProductDetails
          currency={productData.currency}
          title={productData.product_title}
          price={productData.product_price}
          rating={productData.product_star_rating}
          numRatings={productData.product_num_ratings}
        />
      </div>
      <ProductTabs
        id={params.id}
        description={productData.about_product}
        details={[
          `Fabric type: ${productData.product_details["Fabric type"]}`,
          `Care instructions: ${productData.product_details["Care instructions"]}`,
          `Origin: ${productData.product_details["Origin"]}`
        ]}
        reviews={[
          { text: productData.customers_say, rating: 4 } 
        ]}
      />
    </div>
  );
};

export default ProductDetailPage;
