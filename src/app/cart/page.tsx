'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
    const { cart, removeFromCart, getTotalPrice } = useCart();

    if (cart.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-white">
                <h2 className="text-2xl font-bold mb-4">سبد خریدت خالیه 🛒</h2>
                <Link
                    href="/"
                    className="bg-yellow-400 text-black px-6 py-2 rounded-xl font-bold hover:bg-yellow-500 transition"
                >
                    برگشت به گالری
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen px-6 py-10 bg-black text-white">
            <h1 className="text-3xl font-bold mb-8 text-center">🛒 سبد خرید من</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {cart.map((item) => (
                    <div key={item.id} className="bg-zinc-900 rounded-xl p-4 flex gap-4 shadow-lg">
                        <div className="w-32 h-32 relative overflow-hidden rounded-lg">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-between">
                            <h3 className="text-lg font-bold">{item.title}</h3>
                            <p className="text-sm text-zinc-400">تعداد: {item.quantity}</p>
                            <p className="text-yellow-400 font-semibold">
                                {item.price.toLocaleString()} تومان
                            </p>
                            <button
                                onClick={() => removeFromCart(item.id.toString())}
                                className="text-red-400 hover:text-red-600 text-sm mt-2"
                            >
                                ❌ حذف از سبد
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-10 text-center">
                <p className="text-xl font-bold">
                    💰 مجموع:{" "}
                    <span className="text-yellow-400">
                        {getTotalPrice().toLocaleString()} تومان
                    </span>
                </p>
                <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition">
                    ادامه به پرداخت 💳
                </button>
            </div>
        </div>
    );
}
