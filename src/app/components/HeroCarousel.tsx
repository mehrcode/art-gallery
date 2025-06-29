'use client';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

const images = [
    '/images/cover1.jpg',
    '/images/cover2.jpg',
    '/images/cover3.png',
    '/images/cover4.png',
];

export default function HeroCarousel() {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const timeout = useRef<NodeJS.Timeout | null>(null);
    const mouseOver = useRef<boolean>(false);

    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: { perView: 1 },
        created: () => {
            containerRef.current?.addEventListener('mouseover', () => {
                mouseOver.current = true;
                clearTimeout(timeout.current!);
            });
            containerRef.current?.addEventListener('mouseout', () => {
                mouseOver.current = false;
                nextTimeout();
            });
            nextTimeout();
        },
        animationEnded: nextTimeout,
        dragStarted: () => clearTimeout(timeout.current!),
        updated: nextTimeout,
    });

    function nextTimeout() {
        clearTimeout(timeout.current!);
        if (mouseOver.current) return;
        timeout.current = setTimeout(() => {
            slider.current?.next();
        }, 3000);
    }

    return (
        <div
            ref={sliderRef}
            className="keen-slider h-64 md:h-96 overflow-hidden rounded-xl shadow-lg"
        >
            {images.map((src, i) => (
                <div
                    className="keen-slider__slide flex justify-center items-center"
                    key={i}
                >
                    <Image
                        src={src}
                        alt={`art-${i}`}
                        width={300}
                        height={400}
                        className="rounded-xl object-cover w-full h-full"
                    />
                </div>
            ))}
        </div>
    );
}
