'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function ThankYouPage() {
    useEffect(() => {
        document.title = 'سپاس از شما | گالری شولستانی';
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-20">
            <div className="bg-zinc-900 p-10 rounded-xl shadow-xl max-w-md text-center">
                <h1 className="text-3xl font-bold text-yellow-400 mb-4">سفارش ثبت شد! 🎉</h1>
                <p className="text-lg text-zinc-300 mb-6">
                    از شما بابت ثبت سفارش در گالری شولستانی ممنونیم 💛
                    سفارش شما با موفقیت دریافت شد و به‌زودی با شما تماس خواهیم گرفت.
                </p>

                <Link
                    href="/"
                    className="inline-block bg-yellow-400 text-black font-bold py-3 px-6 rounded-xl hover:bg-yellow-500 transition"
                >
                    بازگشت به صفحه اصلی 🏠
                </Link>
            </div>
        </div>
    );
}
