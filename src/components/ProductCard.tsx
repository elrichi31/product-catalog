import React from 'react';

interface ProductCardProps {
  product: {
    asin: string;
    product_title: string;
    product_price: string;
    product_star_rating: string;
    product_num_ratings: number;
    product_url: string;
    product_photo: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const truncateTitle = (title: string, maxLength: number) => {
    return title.length > maxLength ? title.slice(0, maxLength) + '...' : title;
  };

  return (
    <div className="border border-gray-300 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl">
      <img
        src={product.product_photo}
        alt={product.product_title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-bold mt-4">{truncateTitle(product.product_title, 50)}</h2>
      <p className="text-gray-500 text-sm mt-2">{product.product_price}</p>
      <p className="text-sm text-gray-400">Rating: {product.product_star_rating} ({product.product_num_ratings} ratings)</p>
      <a
        href={"/best-selling/" + product.asin}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        View Product
      </a>
    </div>
  );
};

export default ProductCard;
