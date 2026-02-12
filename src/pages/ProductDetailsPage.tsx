import { Link, ScrollRestoration, useLoaderData } from "react-router-dom";
import { useMemo } from "react";

import Button from "../components/Button";
import ProductCard from "../components/ProductCard";

import { type ProductDetailData } from "../../apis/productDetailLoader";

import { PiStarFill } from "react-icons/pi";
import { FiShoppingCart } from "react-icons/fi";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const ProductDetailsPage = () => {
  const { product, recommended } = useLoaderData() as ProductDetailData;

  const randomProducts = useMemo(() => {
    return [...recommended].sort(() => Math.random() - 0.5).slice(0, 4);
  }, [recommended]);

  return (
    <section className="space-y-4 pb-8 md:pt-4">
      <ScrollRestoration />
      {/* simple breadcrumb */}
      <nav className="text-sm text-gray-500">
        <Link to={"/"}>Home</Link> / <Link to={"/products"}>All Product</Link> /{" "}
        <span className="font-semibold text-black">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </span>
      </nav>
      {/* ./ simple breadcrumb */}

      {/* product */}
      <div className="mx-auto max-w-5xl space-y-4 py-4 md:flex md:items-center md:gap-4 lg:justify-between lg:gap-10">
        {/* gambar product */}
        <div className="mx-auto aspect-square w-72 shrink-0 overflow-hidden lg:w-96">
          <img
            src={product.images[0]}
            alt={product.title}
            className="size-full object-cover object-center"
          />
        </div>
        {/* ./ gambar product */}

        {/* data product */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold lg:text-4xl">{product.title}</h1>

          <div className="flex items-center gap-2 text-sm">
            <PiStarFill className="size-5 text-yellow-500" />(
            {product.reviews.length} reviews)
          </div>

          <p className="text-xl font-bold lg:text-2xl">${product.price}</p>
          <p className="text-sm text-pretty text-gray-500">
            {product.description}
          </p>

          <div className="space-y-1">
            <h3 className="font-bold">Specifications</h3>
            <ul className="space-y-1 px-4">
              <li className="list-disc text-sm text-gray-500">
                Brand: {!product.brand ? "Not Available" : product.brand}
              </li>
              <li className="list-disc text-sm text-gray-500">
                SKU: {product.sku}
              </li>
              <li className="list-disc text-sm text-gray-500">
                Weight: {product.weight} g
              </li>
              <li className="list-disc text-sm text-gray-500">
                Dimensions: {product.dimensions.height}" H x{" "}
                {product.dimensions.width}" W x {product.dimensions.depth}" D
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-2 md:flex-row lg:gap-4">
            <Button
              text={"Add to Cart"}
              icon={<FiShoppingCart className="size-6 md:size-7" />}
              variant="cardWithIcon"
            />
            <Button text={"Buy Now"} variant="clear" />
          </div>
        </div>
        {/* ./ data product */}
      </div>
      {/* ./ product */}

      {/* recommended product */}
      <div className="mt-12 space-y-8 lg:mt-16">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wide">
            You Might Also Like
          </h1>

          <div className="flex items-center gap-2 lg:hidden">
            <FaCircleArrowLeft className="size-6 cursor-pointer" />
            <FaCircleArrowRight className="size-6 cursor-pointer" />
          </div>
        </div>

        {/* recommended product list */}
        <div className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth lg:grid lg:snap-none lg:grid-cols-4 lg:gap-6 lg:overflow-visible">
          {randomProducts.map((product) => {
            return (
              <div
                key={product.id}
                className="w-64 shrink-0 snap-start rounded-xl bg-white lg:w-auto"
              >
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
        {/* ./ recommended product list */}
      </div>
      {/* ./ recommended product */}
    </section>
  );
};

export default ProductDetailsPage;
