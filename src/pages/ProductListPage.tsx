import { FaFilter } from "react-icons/fa";
import Stars from "../components/Stars";
import { useState } from "react";
import Button from "../components/Button";

const ProductListPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectCategory, setSelectCategory] = useState<string[]>([]);

  function handleOpenFilters() {
    setIsOpen(!isOpen);
  }

  /*
  Todo:
  ? ubah category jadi menggunakan map
  ? buat filter jadi dinamis, untuk sementara data diambil dengan useEffect dan di tampilkan di console log
  ? berikan style untuk filter untuk lebar desktop
   */

  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if (!selectCategory.includes(target.name)) {
      setSelectCategory((prevState) => [...prevState, target.name]);
    } else {
      setSelectCategory((prevState) => {
        return prevState.filter((prev) => prev !== target.name);
      });
    }
  };

  return (
    <section className="">
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
                <input
                  type="checkbox"
                  name="laptops"
                  onChange={handleCategory}
                  checked={selectCategory.includes("laptops")}
                  className="size-3.5"
                />
                <p className="">Laptops</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="smartphones"
                  onChange={handleCategory}
                  checked={selectCategory.includes("smartphones")}
                  className="size-3.5"
                />
                <p className="">Smartphones</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  onChange={handleCategory}
                  checked={selectCategory.includes("headphones")}
                  name="headphones"
                  className="size-3.5"
                />
                <p className="">Headphones</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="accessories"
                  onChange={handleCategory}
                  checked={selectCategory.includes("accessories")}
                  className="size-3.5"
                />
                <p className="">Accessories</p>
              </div>
            </div>
          </div>
          {/* ./ category */}

          {/* price range */}
          <div className="space-y-2 rounded-md bg-white p-4 shadow-sm">
            <h3 className="">Price Range</h3>
            <div className="">
              <input type="range" step={5} className="w-full" />
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
            <Button text="Apply Filters" variant="secondary" />
            <Button text="Clear All" variant="clear" />
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
