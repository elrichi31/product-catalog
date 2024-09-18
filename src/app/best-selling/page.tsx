'use client'
import { useEffect, useState } from 'react';
import { getProducts } from '../../services/api';
import ProductCard from '../../components/ProductCard';

const Page = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      console.log(data.data.best_sellers);
      setProducts(data.data.best_sellers);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Best Selling Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <ProductCard key={product.asin} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Page;
