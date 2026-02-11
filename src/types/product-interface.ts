export interface ReviewType {
  comment: string;
  date: string;
  rating: number;
  reviewerEmail: string;
  reviewerName: string;
}

export interface DimensionsProduct {
  width: number;
  height: number;
  depth: number;
}

export interface ProductType {
  id: number;
  title: string;
  rating: number;
  price: number;
  images: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: DimensionsProduct;
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
