import type { ProductType } from "../types/product-interface";
import Stars from "./Stars";

type Props = {
  product: ProductType;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="mx-auto w-full max-w-87.5 space-y-2.5 rounded-xl bg-white text-sm xl:text-base">
      <div className="flex h-40 items-center justify-center">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      <div className="p-4">
        <p className="min-h-10 font-medium capitalize md:mb-1.5 xl:mb-0">
          {product.title}
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-1.5">
            <Stars /> {product.rating}
          </div>
          <p className="font-semibold text-gray-700">{product.price}</p>
          <button className="bg-primary w-full cursor-pointer rounded-lg py-2 text-center text-white hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
