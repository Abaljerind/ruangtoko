import type { LoaderFunctionArgs } from "react-router-dom";
import type { ProductType } from "../src/types/product-interface";

export interface ProductDetailData {
  product: ProductType;
  recommended: ProductType[];
}

export const productDetailLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<ProductDetailData> => {
  const id = Number(params.id);

  if (isNaN(id)) {
    throw new Response("Invalid product ID", { status: 400 });
  }

  const productRes = await fetch(`https://dummyjson.com/products/${id}`);

  if (!productRes.ok) {
    throw new Response("Failed to fetch product", {
      status: productRes.status,
    });
  }
  const product: ProductType = await productRes.json();

  // fetch product berdasarkan category
  const categoryRes = await fetch(
    `https://dummyjson.com/products/category/${product.category}`,
  );

  if (!categoryRes.ok) {
    throw new Response("Failed to fetch recommended products", {
      status: categoryRes.status,
    });
  }

  const categoryData = await categoryRes.json();

  // filter product yang id nya sama dengan product yang sedang dibuka agar tidak masuk di rekomendasi
  const recommended: ProductType[] = categoryData.products.filter(
    (p: ProductType) => p.id !== product.id,
  );

  return { product, recommended };
};
