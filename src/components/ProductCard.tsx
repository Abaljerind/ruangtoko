import type { ProductType } from "../types/product-interface";
import Stars from "./Stars";

type Props = {
  product: ProductType;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="mx-auto space-y-2 rounded-xl bg-white text-sm xl:text-base">
      <img src={product.image} alt="" className="w-full rounded-t-lg" />
      <div className="space-y-2.5 p-4">
        <p className="font-medium capitalize">{product.title}</p>
        <div className="flex items-center gap-1.5">
          <Stars /> {product.rating}
        </div>
        <p className="font-semibold text-gray-700">{product.price}</p>
        <button className="bg-primary w-full cursor-pointer rounded-lg py-2 text-center text-white hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
