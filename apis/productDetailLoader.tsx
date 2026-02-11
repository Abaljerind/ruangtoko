import type { LoaderFunctionArgs } from "react-router-dom";
import type { ProductType } from "../src/types/product-interface";

export const productDetailLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<ProductType> => {
  const id = Number(params.id);

  if (isNaN(id)) {
    throw new Response("Invalid product ID", { status: 400 });
  }

  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Response("Failed to fetch product", { status: res.status });
  }
  const data: ProductType = await res.json();
  return data;
};
