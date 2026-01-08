export interface ProductType {
  title: string;
  rating: string;
  price: string;
  images: string;
}

export interface ProductResponse {
  limit: number;
  products: ProductType[];
  skip: number;
  total: number;
}
