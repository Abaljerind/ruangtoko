import { Link, ScrollRestoration, useLoaderData } from "react-router-dom";
import { productDetailLoader } from "../../apis/productDetailLoader";
import { PiStarFill } from "react-icons/pi";
import Button from "../components/Button";
import { FiShoppingCart } from "react-icons/fi";

const ProductDetailsPage = () => {
  const product = useLoaderData() as Awaited<
    ReturnType<typeof productDetailLoader>
  >;

  return (
    <section className="">
      <ScrollRestoration />
      {/* simple breadcrumb */}
      <nav className="mb-4 text-sm text-gray-500">
        <Link to={"/"}>Home</Link> / <Link to={"/products"}>All Product</Link> /{" "}
        <span className="font-semibold text-black">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </span>
      </nav>
      {/* ./ simple breadcrumb */}

      {/* product */}
      <div className="mx-auto max-w-5xl space-y-4 py-8 md:flex md:items-center md:gap-4 lg:justify-between lg:gap-10">
        {/* gambar product */}
        <div className="aspect-square w-96 shrink-0 overflow-hidden">
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
          <p className="text-sm text-balance text-gray-500">
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
    </section>
  );
};

export default ProductDetailsPage;
