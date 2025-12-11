import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HeroImage from "./assets/hero-image-furniture.webp";

function App() {
  return (
    <>
      <NavBar />
      <main className="p-6 lg:px-24">
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
        <div className=""></div>
        {/* ./ Popular Products */}
      </main>
      <Footer />
    </>
  );
}

export default App;
