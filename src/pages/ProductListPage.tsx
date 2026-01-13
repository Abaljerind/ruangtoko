import { FaFilter } from "react-icons/fa";
import Stars from "../components/Stars";
import { useState } from "react";

const ProductListPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOpenFilters() {
    setIsOpen(!isOpen);
  }

  return (
    <section className="p-4 lg:px-24 lg:py-10">
      {/* filters */}
      <span
        onClick={handleOpenFilters}
        className="mb-2 flex cursor-pointer items-center gap-2"
      >
        <FaFilter className="size-4" /> Customize results
      </span>
      {isOpen && (
        <section className="space-y-4">
          {/* category */}
          <div className="space-y-2 rounded-md bg-white p-4 shadow-sm">
            <h3 className="">Category</h3>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <input type="checkbox" checked className="size-3.5" />
                <p className="">Laptops</p>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="size-3.5" />
                <p className="">Smartphones</p>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="size-3.5" />
                <p className="">Headphones</p>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="size-3.5" />
                <p className="">Accessories</p>
              </div>
            </div>
          </div>
          {/* ./ category */}

          {/* price range */}
          <div className="space-y-2 rounded-md bg-white p-4 shadow-sm">
            <h3 className="">Price Range</h3>
            <div className="">
              <input type="range" className="w-full" />
              <div className="flex items-center justify-between">
                <p className="">$0</p>
                <p className="">$3000</p>
              </div>
            </div>
          </div>
          {/* ./ price range */}

          {/* rating */}
          <div className="space-y-2 rounded-md bg-white p-4 shadow-sm">
            <h3 className="">Rating</h3>
            <div className="flex items-center gap-2">
              <Stars />
              <p className="">4 & up</p>
            </div>
          </div>
          {/* ./ rating */}

          {/* apply filters */}
          <div className="grid gap-2">
            <button className="bg-primary cursor-pointer rounded-lg py-3 font-semibold text-white shadow-md active:bg-blue-500">
              Apply Filters
            </button>
            <button className="text-text cursor-pointer rounded-lg bg-gray-300 py-3 font-semibold shadow-md active:bg-blue-500">
              Clear All
            </button>
          </div>
          {/* ./ apply filters */}
        </section>
      )}

      {/* ./ filters */}

      {/* all products */}
      {/* ./ all products */}
    </section>
  );
};

export default ProductListPage;
