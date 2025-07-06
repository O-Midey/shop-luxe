import HeroBanner from "./_components/HeroBanner";
import FeaturedProducts from "./_components/FeaturedProducts";
import Categories from "./Categories";
import Footer from "./_components/Footer";

export default function Page() {
  return (
    <>
      <HeroBanner />
      <FeaturedProducts />
      <Categories />
    </>
  );
}
