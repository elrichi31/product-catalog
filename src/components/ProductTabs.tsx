import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReviewCard from './ReviewCard';
import { getProductsReviews } from '@/services/api';

interface ProductTabsProps {
    id: string;
    description: string[];
    details: string[];
    reviews: {
        review_id?: string;
        review_title?: string;
        review_comment?: string;
        review_star_rating?: string;
        review_author?: string;
        review_author_avatar?: string;
        review_date?: string;
        review_link?: string;
        rating?: number;
        text?: string;
    }[];
}

interface Review {
    review_id?: string;
    review_title: string;
    review_comment: string;
    review_star_rating: string;
    review_author: string;
    review_author_avatar: string;
    review_date: string;
    review_link: string;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ description, details, reviews, id }) => {
    const [showReviews, setShowReviews] = useState(false);
    const [reviewsData, setReviewsData] = useState<Review[]>([]);

    const handleLoadReviews = async () => {
        const dataReviews = await getProductsReviews(id);
        setReviewsData(dataReviews.data.reviews);
        setShowReviews(true);
    };
    return (
        <Tabs defaultValue="description" className="mt-12">
            <TabsList>
                <TabsTrigger value="description">Descripción</TabsTrigger>
                <TabsTrigger value="details">Detalles</TabsTrigger>
                <TabsTrigger value="reviews">Reseñas</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
                <ul className="list-disc list-inside">
                    {description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>
            </TabsContent>
            <TabsContent value="details" className="mt-4">
                <ul className="list-disc list-inside">
                    {details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4">
                {reviews.map((review, index) => (
                    <div key={index} className="border p-4 rounded-lg mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                            {[...Array(review.rating)].map((_, i) => (
                                <span key={i}>⭐</span>
                            ))}
                        </div>
                        <p>{review.text}</p>
                    </div>
                ))}
                {!showReviews ? (
                    <div className="text-center">
                        <button
                            onClick={handleLoadReviews}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Cargar reseñas de personas
                        </button>
                    </div>
                ) : (
                    <div>
                        {
                            reviewsData.map((review) => (
                                <ReviewCard key={review.review_id} review={review} />
                            ))
                        }
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => { setShowReviews(false) }}>Ocultar reseñas de personas</button>
                    </div>
                )}
            </TabsContent>
        </Tabs>
    );
};

export default ProductTabs;
