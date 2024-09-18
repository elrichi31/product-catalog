import { Star, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ProductDetailsProps {
  title: string;
  price: string;
  rating: string;
  numRatings: number;
  currency: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ title, price, rating, numRatings, currency }) => {

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex items-center space-x-2">
        {[1, 2, 3, 4, 5].map((star, index) => (
          <Star key={index} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
        ))}
        <span className="text-sm text-gray-600">({numRatings} reseñas)</span>
      </div>
      <p className="text-2xl font-bold">${price} {currency}</p>     

      <div className="flex space-x-4">
        <Button className="flex-1 bg-black text-white ">
          Añadir al carrito
        </Button>
        <Button variant="outline">
          <Heart className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
