import HeroCarousel from "./components/HeroCarousel";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import { products } from "./data/products";



export default function Home() {
  return (
    <main className="min-h-screen px-4 md:px-12 py-8 space-y-12">
      
      <section>
        <HeroCarousel />
        <h1 className="text-3xl md:text-4xl mt-6 font-bold text-center">گالری نقاشی‌های من</h1>
        <p className="text-center text-gray-400 mt-2">نقاشی‌هایی از دل، با رنگ‌هایی از جان</p>
      </section>

      <section>
        <Gallery products={products} />
      </section>

      <Footer />
    </main>
  );
}
