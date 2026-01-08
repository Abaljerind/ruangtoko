import type { ProductResponse } from "../src/types/product-interface";

export const homepageLoader = async (): Promise<ProductResponse> => {
  const response = await fetch("https://dummyjson.com/products");

  // check if fetch success or not
  if (!response.ok) {
    throw new Response("Failed to fetch posts", { status: response.status });
  }

  return response.json();
};
