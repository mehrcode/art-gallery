'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white px-6 py-16">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
                <Image
                    src="/images/artist.png" 
                    alt="Artist"
                    width={500}
                    height={300}
                    className="rounded-full border-4 border-yellow-400 shadow-lg"
                />

                <h1 className="text-4xl font-bold text-yellow-400 mt-4">درباره‌ی من</h1>

                <p className="text-lg leading-loose text-zinc-300">
                    من یک هنرمند عاشق رنگ، فرم و بیان هستم. نقاشی برام فقط خلق تصویر نیست، بلکه راهیه برای
                    لمس لحظه‌ها، رؤیاها و داستان‌هایی که توی دلم شکل می‌گیرن. گالری شولستانی جاییه برای نشون‌دادن این احساسات روی بوم.
                    هر اثر من تکه‌ای از روحمه که می‌خوام با شما شریک شم 🎨
                </p>

                <blockquote className="italic text-zinc-500 border-r-4 border-yellow-400 pr-4 mt-6">
                    «رنگ‌ها، زبان بی‌کلام دل‌ها هستن»
                </blockquote>

                <Link
                    href="/"
                    className="mt-8 inline-block bg-yellow-400 text-black font-bold py-3 px-6 rounded-xl hover:bg-yellow-500 transition"
                >
                    دیدن گالری آثار 🎨
                </Link>
            </div>
        </div>
    );
}
