import Stars from "../components/Stars";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";

import { FaFilter } from "react-icons/fa";
import { useMemo, useState } from "react";
import { useLoaderData } from "react-router-dom";

import type { AppliedFilter } from "../types/filter-interface";
import type { homepageLoader } from "../../apis/homepageLoader";
import type { ProductType } from "../types/product-interface";

const ProductListPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);

  // draft filter (filter sementara sebelum user klik button)
  const [selectCategory, setSelectCategory] = useState<string[]>([]);
  const [selectRange, setSelectRange] = useState<number>(1500);
  const [selectRating, setSelectRating] = useState<number>(0);

  // applied filter (filter yang sudah di otak atik user disemua input)
  const [appliedFilter, setAppliedFilter] = useState<AppliedFilter | null>(
    null,
  );

  // untuk menyimpan sort apa yang sedang dipilih user
  const [selectSort, setSelectSort] = useState<string>("Recommendation");

  // data loader
  const { products: productsList } = useLoaderData<typeof homepageLoader>();

  // array untuk mapping sort
  const sorts: string[] = [
    "Recommendation",
    "Name (A - Z)",
    "Name (Z - A)",
    "Price (Low - High)",
    "Price (High - Low)",
  ];
  /*
  Todo:
  ? benerin filter kategori biar text dan value nya sama dengan data dari API
  ? gunakan pagination / load more, cek yang bagus yang mana, jika data yang tampil lebih dari 8
  ? buat sorting data berdasarkan nama, harga dan rating nya
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

  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectRange(+value);
  };

  function closeFilters() {
    const isDesktop = window.innerWidth >= 1020;

    if (!isDesktop) {
      setIsOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  // ini untuk menyimpan hasil filter yang diubah user sebelum user klik button Apply Filters
  const handleApplyFilter = () => {
    setAppliedFilter({
      categories: selectCategory,
      maxPrice: selectRange,
      minRating: selectRating,
    });

    closeFilters();
  };

  // ini untuk memfilter data saat user klik button Apply Filters
  const filteredProducts: ProductType[] = useMemo(() => {
    return productsList.filter((product) => {
      // kalau user belum klik button Apply Filters, semua product yang tampil
      if (!appliedFilter) return true;

      // filter category, kalau user pilih kategori DAN kategori product TIDAK ADA di pilihan, buang produknya
      if (
        appliedFilter.categories.length > 0 &&
        !appliedFilter.categories.includes(product.category)
      )
        return false;

      // filter price, kalau filter price aktif DAN harga product lebih mahal dari filter price, buang produknya
      if (
        appliedFilter.maxPrice !== null &&
        product.price > appliedFilter.maxPrice
      )
        return false;

      // filter rating, kalau filter rating aktif DAN rating product lebih kecil dari filter rating, buang produknya
      if (
        appliedFilter.minRating !== null &&
        product.rating < appliedFilter.minRating
      )
        return false;

      // kalau lolos semua filter diatas, tampilkan
      return true;
    });
  }, [productsList, appliedFilter]);

  // ini untuk sorting data
  const sortedProducts: ProductType[] = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      switch (selectSort) {
        case "Name (A - Z)":
          return a.title.localeCompare(b.title);
        case "Name (Z - A)":
          return b.title.localeCompare(a.title);
        case "Price (Low - High)":
          return a.price - b.price;
        case "Price (High - Low)":
          return b.price - a.price;
        default:
          return 0;
      }
    });
  }, [filteredProducts, selectSort]);

  // ini untuk menghapus filter
  const handleClearFilter = () => {
    (setAppliedFilter(null),
      setSelectCategory([]),
      setSelectRange(1500),
      setSelectRating(0));

    closeFilters();
  };

  const handleToggleDown = () => {
    setIsOpen2(!isOpen2);
  };

  const handleOpenFilters = () => {
    setIsOpen(!isOpen);
  };

  // untuk mengganti teks pada button sort by:
  const handleSelectSort = (sort: string) => {
    setSelectSort(sort);
    setIsOpen2(false);
  };

  return (
    <section className="grid gap-4 lg:flex lg:items-start lg:gap-6">
      {/* filters */}
      <section className="space-y-4 lg:w-2/5">
        <div
          onClick={handleOpenFilters}
          className="flex cursor-pointer items-center gap-2 lg:hidden"
        >
          <FaFilter className="size-4" /> Customize results
        </div>
        <h2 className="hidden text-2xl lg:block">Filter Results</h2>
        <section
          className={`${isOpen ? "block" : "hidden"} space-y-4 lg:block`}
        >
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
              <input
                onChange={handleRange}
                value={selectRange}
                type="range"
                max={3000}
                min={5}
                className="w-full"
              />
              <div className="flex items-center justify-between">
                <p className="">$5</p>
                <p className="">${selectRange}</p>
                <p className="">$3000</p>
              </div>
            </div>
          </div>
          {/* ./ price range */}

          {/* rating */}
          <div className="space-y-2 rounded-md bg-white p-4 shadow-sm">
            <h3 className="">Rating</h3>
            <div className="flex items-center gap-4">
              <Stars
                rating={selectRating}
                onSelect={(value) => setSelectRating(value)}
              />
              <p className="flex items-center gap-2">{selectRating} Stars</p>
            </div>
          </div>
          {/* ./ rating */}

          {/* apply filters */}
          <div className="grid gap-2">
            <Button
              onClick={handleApplyFilter}
              text="Apply Filters"
              variant="secondary"
            />
            <Button
              onClick={handleClearFilter}
              text="Clear All"
              variant="clear"
            />
          </div>
          {/* ./ apply filters */}
        </section>
      </section>

      {/* ./ filters */}

      {/* all products */}
      <section className="space-y-4 lg:w-full">
        {/* bagian h1 ini nanti diganti isinya dengan category dari data API. */}
        <div className="space-y-4">
          <div className="space-y-4">
            <h1 className="text-4xl">Laptops</h1>
            <h4 className="text-sm lg:text-base">
              Find the best products that suit your needs.
            </h4>
          </div>

          {/* sort input */}
          <div className="relative w-fit">
            <button
              type="button"
              onClick={handleToggleDown}
              className="cursor-pointer rounded-lg bg-white px-3 py-1.5 text-sm shadow hover:bg-gray-200"
            >
              Sort by: {selectSort}
            </button>

            {isOpen2 && (
              <ul className="absolute left-0 mt-2 w-52 rounded-lg bg-white py-1 text-sm shadow">
                {sorts.map((sort, index) => {
                  return (
                    <li
                      onClick={() => handleSelectSort(sort)}
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      key={index + 1}
                    >
                      {sort}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          {/* ./ sort input */}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sortedProducts.map((product, index) => {
            return <ProductCard product={product} key={index + 1} />;
          })}
        </div>
      </section>
      {/* ./ all products */}
    </section>
  );
};

export default ProductListPage;
