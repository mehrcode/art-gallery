'use client';
import Image from "next/image";
import Link from "next/link";
import { Products } from '@/app/data/products';

interface GalleryProps {
    products: Products[];
}

const Gallery: React.FC<GalleryProps> = ({ products }) => {
    return (
        <section className="px-4 md:px-8 py-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
                گالری هنری شولستانی
            </h2>
            
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