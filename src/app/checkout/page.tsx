'use client'

import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function CheckoutPage() {
    const { cart, getTotalPrice, clearCart } = useCart();
    const router = useRouter();

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.phone) {
            alert('لطفا همه فیلدها رو پر کن');
            return;
        }

        console.log('✅ سفارش ثبت شد:', { form, cart });

        clearCart();
        router.push('/thank-you');
    };

    return (
        <div className='min-h-screen bg-black text-white px-6 py-10 max-w-xl mx-auto'>
            <h1 className='text-3xl font-bold mb-8 text-center'>اطلاعات سفارش</h1>

            <form onSubmit={handleSubmit}
                className='flex flex-col gap-4'>
                <input
                    type="text"
                    name='name'
                    placeholder='نام و نام خانوادگی'
                    value={form.name}
                    onChange={handleChange}
                    className='p-3 rounded-xl text-black'
                />

                <input
                    type="email"
                    name='email'
                    placeholder=' آدرس ایمیل '
                    value={form.email}
                    onChange={handleChange}
                    className='p-3 rounded-xl text-black'
                />

                <input
                    type="tel"
                    name="phone"
                    placeholder="شماره تماس"
                    value={form.phone}
                    onChange={handleChange}
                    className="p-3 rounded-xl text-black"
                />

                <div className="mt-4 bg-zinc-800 p-4 rounded-xl">
                    <p className="text-sm text-zinc-400">مبلغ قابل پرداخت:</p>
                    <p className="text-yellow-400 text-2xl font-bold mt-1">
                        {getTotalPrice().toLocaleString()} تومان
                    </p>
                </div>

                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 transition text-white py-3 rounded-xl mt-4 font-bold"
                >
                    ثبت سفارش ✅
                </button>
            </form>
        </div>
    );
}