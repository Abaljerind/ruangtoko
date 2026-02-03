export interface ReviewType {
  comment: string;
  date: string;
  rating: number;
  reviewerEmail: string;
  reviewerName: string;
}

export interface ProductType {
  title: string;
  rating: number;
  price: number;
  images: string[];
  brand: string;
  category: string;
  reviews: ReviewType[];
  description: string;
}

export interface ProductResponse {
  limit: number;
  products: ProductType[];
  skip: number;
  total: number;
}
