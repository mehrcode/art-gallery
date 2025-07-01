'use client';

import { useCart } from '@/context/CartContext';
import { Products } from '@/app/data/products';

const AddToCartClient = ({ product }: { product: Products }) => {
    const { addToCart } = useCart();

    return (
        <button
            onClick={() => addToCart(product)}
            className="mt-4 bg-yellow-400 text-black px-6 py-2 rounded-xl font-bold hover:bg-yellow-500 transition"
        >
            افزودن به سبد خرید 🛒
        </button>
    );
};

export default AddToCartClient;
