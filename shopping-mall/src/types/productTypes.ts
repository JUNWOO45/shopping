export type TProductItem = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: TProductRating;
  title: string;
};

export type TProductRating = {
  rate: number;
  count: number;
};
