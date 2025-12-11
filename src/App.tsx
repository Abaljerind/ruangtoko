import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HeroImage from "./assets/hero-image-furniture.webp";
import type { ProductType } from "./types/product-interface";
import ProductCard from "./components/ProductCard";

function App() {
  const products: ProductType[] = [
    {
      title: "Modern armchair",
      rating: "4.5",
      price: "$299.00",
      image: HeroImage,
    },
    {
      title: "Wireless Headphones",
      rating: "5.0",
      price: "$149.99",
      image: HeroImage,
    },
    {
      title: "Ceramic Vase Set",
      rating: "4.7",
      price: "$75.00",
      image: HeroImage,
    },
    {
      title: "Smart Coffee Maker",
      rating: "4.6",
      price: "$89.50",
      image: HeroImage,
    },
  ];

  return (
    <>
      <NavBar />
      <main className="p-4 lg:px-24">
        {/* Hero Section */}
        <section className="flex flex-col gap-8 rounded-2xl bg-linear-to-r/hsl from-blue-500 to-sky-400 p-6 md:flex-row md:gap-0 lg:gap-20 lg:rounded-3xl lg:px-12">
          {/* Text & description */}
          <div className="space-y-2.5 md:basis-1/2 md:space-x-2.5 lg:space-y-5">
            <h1 className="text-3xl font-bold text-pretty text-white lg:text-4xl xl:text-6xl">
              Discover Your Next Favorite
            </h1>
            <p className="text-pretty text-white xl:text-lg">
              Explore our curated collection of high-quality products, designed
              to fit your lifestyle and inspire your everyday.
            </p>
            <button className="text-primary cursor-pointer rounded-lg bg-white px-4 py-2.5 text-sm font-semibold lg:rounded-xl">
              Shop Now
            </button>
          </div>
          {/* ./ Text & description */}

          {/* Hero image */}
          <img
            src={HeroImage}
            alt="Hero Image"
            className="rounded-xl md:w-sm lg:w-sm lg:rounded-2xl xl:w-xl"
          />
          {/* ./ Hero image */}
        </section>
        {/* ./ Hero Section */}

        {/* Popular Products */}
        <section className="flex flex-col items-center gap-8 py-12 md:items-start">
          <h2 className="font-poppins text-xl font-semibold">
            Popular Products
          </h2>

          {/* Products List */}
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
            {/* Product Cards */}
            {products.map((product: ProductType, index: number) => {
              return <ProductCard product={product} key={index + 1} />;
            })}
            {/* Product Cards */}
          </div>
          {/* ./ Products List */}
        </section>
        {/* ./ Popular Products */}
      </main>
      <Footer />
    </>
  );
}

export default App;
