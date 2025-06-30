'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Products } from '@/app/data/products';

interface GalleryProps {
    products: Products[];
}

const Gallery: React.FC<GalleryProps> = ({ products }) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filterProducts = selectedCategory
        ? products.filter((p) => p.category === selectedCategory)
        : products;

    const categories = ["زن", "گربه", "سگ", "صورتی", "قهوه", "تایپوگرافی", "همه"];

    return (
        <section className="px-4 md:px-8 py-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
                گالری هنری شولستانی
            </h2>
            {/* filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat === "همه" ? null : cat)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold transition 
                            ${
                                selectedCategory === cat || (cat === "همه" && !selectedCategory)
                                ? "bg-yellow-400 text-black"
                                : "bg-zinc-800 text-white hover:bg-zinc-700"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>


            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {products.map((art) => (
                    <div key={art.id}>
                        <Link href={`/products/${art.id}`} className="block w-full h-full">
                            <Image
                                src={art.image}
                                alt={art.title}
                                width={300}
                                height={300}
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 cursor-pointer"
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;