'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react'; // می‌تونی آیکون دلخواه بذاری

const Header = () => {
    const { cart } = useCart();
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-zinc-900 shadow-lg">
            <Link href="/" className="text-2xl font-bold text-white">
                گالری شولستانی 🎨
            </Link>

            <Link href={"/about"}>
                درباره من
            </Link>
            <Link href="/cart" className="relative">
                <ShoppingCart className="w-6 h-6 text-white" />
                {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-yellow-400 text-black rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold">
                        {totalItems}
                    </span>
                )}
            </Link>
        </header>
    );
};

export default Header;
