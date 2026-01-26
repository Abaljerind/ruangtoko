import { LiaCartPlusSolid } from "react-icons/lia";
import type { ProductType } from "../types/product-interface";
import { PiStarFill } from "react-icons/pi";
import Button from "./Button";

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

      <div className="space-y-3 p-4">
        <p className="min-h-6 text-sm font-semibold capitalize md:mb-1.5 xl:mb-0">
          {product.title}
        </p>
        <p className="line-clamp-2 text-sm text-gray-400">
          {product.description}
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            <PiStarFill className="size-5 text-yellow-500" />
            <span className="font-medium">{product.rating}</span>{" "}
            <span className="text-gray-400">
              ({product.reviews.length} reviews)
            </span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-gray-900">${product.price}</p>
            <Button
              text={
                <LiaCartPlusSolid className="size-7 group-hover:text-white" />
              }
              variant="cardIcon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
