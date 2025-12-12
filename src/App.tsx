import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HeroImage from "./assets/hero-image-furniture.webp";
import type { ProductType } from "./types/product-interface";
import ProductCard from "./components/ProductCard";
import { RiShieldCheckLine, RiTruckLine } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { useEffect, useState } from "react";

function App() {
  const [isSignUp, setIsSignUp] = useState<string>("");
  const [productsList, setProductsList] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProductsList(data.products));
  }, []);

  console.log(productsList);
  // function untuk mengambil 4 data pertama dari productsList
  const popularProducts = productsList.slice(0, 4);

  const handleEmailSignUp = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSignUp(e.target.value);
  };

  const handleSubmitEmailSignUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isSignUp.length === 0) return;

    alert("Terima kasih sudah berlangganan newsletter kami.");
    setIsSignUp("");
  };

  return (
    <>
      <NavBar />
      <main className="p-4 lg:px-24 lg:py-10">
        {/* Hero Section */}
        <section className="flex flex-col gap-8 rounded-2xl bg-linear-to-r/hsl from-blue-500 to-sky-400 p-6 md:flex-row md:gap-0 lg:gap-20 lg:rounded-3xl lg:px-12">
          {/* Text & description */}
          <div className="font-poppins space-y-2.5 md:basis-1/2 md:space-x-2.5 lg:space-y-5">
            <h1 className="text-3xl font-bold text-pretty text-white lg:text-4xl xl:text-6xl">
              Discover Your Next Favorite
            </h1>
            <p className="text-pretty text-white xl:text-lg">
              Explore our curated collection of high-quality products, designed
              to fit your lifestyle and inspire your everyday.
            </p>
            <button className="text-primary cursor-pointer rounded-lg bg-white px-4 py-2.5 text-sm font-semibold hover:bg-gray-100 lg:rounded-xl">
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
        <section className="flex flex-col gap-8 py-12">
          <h2 className="font-poppins place-self-start text-xl font-semibold">
            Popular Products
          </h2>

          {/* Products List */}
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {/* Product Cards */}
            {popularProducts.map((product: ProductType, index: number) => {
              return <ProductCard product={product} key={index + 1} />;
            })}
            {/* Product Cards */}
          </div>
          {/* ./ Products List */}
        </section>
        {/* ./ Popular Products */}

        {/* Features */}
        <section className="grid items-center gap-4 py-12 md:grid-cols-2 xl:grid-cols-3">
          {/* Feature Card 1 */}
          <div className="features-card-wrapper">
            {/* Feature Icon */}
            <RiTruckLine className="features-card-icon" />

            {/* Feature Description */}
            <div className="space-y-0.5">
              <h4 className="font-bold">Free Shipping</h4>
              <p className="text-sm tracking-wide">On orders over $50</p>
            </div>
          </div>
          {/* ./ Feature Card 1 */}

          {/* Feature Card 2 */}
          <div className="features-card-wrapper">
            {/* Feature Icon */}
            <RiShieldCheckLine className="features-card-icon" />

            {/* Feature Description */}
            <div className="space-y-0.5">
              <h4 className="font-bold">Secure Payment</h4>
              <p className="text-sm tracking-wide">
                Your payment is 100% secure
              </p>
            </div>
          </div>
          {/* ./ Feature Card 2 */}

          {/* Feature Card 3 */}
          <div className="features-card-wrapper">
            {/* Feature Icon */}
            <MdSupportAgent className="features-card-icon" />

            {/* Feature Description */}
            <div className="space-y-0.5">
              <h4 className="font-bold">24/7 Support</h4>
              <p className="text-sm tracking-wide">
                Contact us anytime you need
              </p>
            </div>
          </div>
          {/* ./ Feature Card 3 */}
        </section>
        {/* ./ Features */}

        {/* Newsletter Signup */}
        <section className="bg-secondary/25 rounded-2xl py-12">
          <div className="mx-auto w-5/6 space-y-2.5 text-center">
            <h2 className="font-poppins text-xl font-bold">
              Get Exclusive Deals
            </h2>
            <p className="mx-auto text-pretty md:w-3/4 xl:w-2/5">
              Subscribe to our newsletter to get updates on our latest products
              and promotions.
            </p>
            <div className="mt-4 flex items-center justify-center">
              <input
                type="email"
                value={isSignUp}
                className="w-3/4 rounded-l-xl bg-white px-3 py-2 invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 md:w-1/2 lg:w-2/5"
                placeholder="Enter your email"
                onChange={handleEmailSignUp}
              />
              <button
                onClick={handleSubmitEmailSignUp}
                type="submit"
                className="bg-accent cursor-pointer rounded-r-xl px-3 py-2 text-white"
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>
        {/* ./ Newsletter Signup */}
      </main>
      <Footer />
    </>
  );
}

export default App;
