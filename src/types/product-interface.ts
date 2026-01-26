export interface ProductType {
  title: string;
  rating: string;
  price: string;
  images: string;
  brand: string;
  category: string;
  reviews: [];
}

export interface ProductResponse {
  limit: number;
  products: ProductType[];
  skip: number;
  total: number;
}
