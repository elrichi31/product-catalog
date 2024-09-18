import React, { useState } from 'react';

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

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  const [showFullComment, setShowFullComment] = useState(false);

  const toggleShowMore = () => {
    setShowFullComment(!showFullComment);
  };

  const maxCommentLength = 650;
  const isLongComment = review.review_comment.length > maxCommentLength;
  const commentToShow = showFullComment
    ? review.review_comment
    : review.review_comment.slice(0, maxCommentLength) + (isLongComment ? '...' : '');

  return (
    <div className="border p-4 rounded-lg mb-4">
      <div className="flex items-center space-x-4 mb-2">
        <img src={review.review_author_avatar} alt={review.review_author} className="w-10 h-10 rounded-full" />
        <div>
          <a href={review.review_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            {review.review_title}
          </a>
          <p className="text-sm text-gray-500">Por {review.review_author} - {review.review_date}</p>
        </div>
      </div>
      <p>{commentToShow}</p>
      {isLongComment && (
        <button
          onClick={toggleShowMore}
          className="text-blue-500 hover:underline mt-2"
        >
          {showFullComment ? 'Mostrar menos' : 'Mostrar más'}
        </button>
      )}
      <div className="flex items-center space-x-1 mt-2">
        {[...Array(parseInt(review.review_star_rating))].map((_, i) => (
          <span key={i}>⭐</span>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
