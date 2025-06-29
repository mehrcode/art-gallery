// ProductPage.tsx (server component)
import { products } from '@/app/data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import AddToCartClient from '@/app/components/AddToCartClient';

interface ProductPageProps {
    params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    const product = products.find((p) => String(p.id) === id);

    if (!product) return notFound();

    return (
        <div className="min-h-screen bg-black text-white px-6 py-10">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-md">
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={600}
                        height={800}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold">{product.title}</h1>
                    <p className="text-sm text-zinc-400">{product.size}</p>
                    <p className="text-yellow-400 text-xl font-semibold">
                        {product.price.toLocaleString()} تومان
                    </p>
                    <p className="leading-relaxed">{product.description}</p>

                    <AddToCartClient product={product} />
                </div>
            </div>
        </div>
    );
}
