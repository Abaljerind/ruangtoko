import type { ProductResponse } from "../src/types/product-interface";

export const productListPageLoader = async (): Promise<ProductResponse> => {
  const response = await fetch("https://dummyjson.com/products");

  if (!response.ok) {
    throw new Response("Failed to fetch posts", { status: response.status });
  }

  return response.json();
};
