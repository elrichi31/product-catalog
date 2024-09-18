import axios from 'axios';

const api = axios.create({
  baseURL: 'https://real-time-amazon-data.p.rapidapi.com/',
  headers: {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    'x-rapidapi-host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
  },
});

export const getProducts = async () => {
  const response = await api.get('/best-sellers', {
    params: {
      category: 'software',
      type: 'BEST_SELLERS',
      page: '1',
      country: 'US'
    }
  });
  return response.data;
};

export const getProductsDetails = async (asin: string) => {
  const response = await api.get('/product-details', {
    params: {
      asin,
      country: 'US'
    }
  });
  return response.data;
}

export const getProductsReviews = async (asin: string) => {
  const response = await api.get('/product-reviews', {
    params: {
      asin,
      country: 'US',
      sort_by: 'TOP_REVIEWS',
      star_rating: 'ALL',
      verified_purchases_only: 'false',
      images_or_videos_only: 'false',
      current_format_only: 'false',
      page: '1'
    }
  });
  return response.data;
}
