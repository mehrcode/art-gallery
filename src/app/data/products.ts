export interface Products {
    id: string;
    title: string;
    image: string;
    price: number;
    size: string;
    description?: string;
}

export const products: Products[] = [
    {
        id: "1",
        title: "رویای رنگ‌ها",
        image: "/images/1.jpg",
        price: 850000,
        size: "60x80 cm",
        description: "تابلویی از فضای خیال و شهود در رنگ‌های گرم."
    },
    {
        id: "2",
        title: "هارمونی سکوت",
        image: "/images/2.jpg",
        price: 1200000,
        size: "50x70 cm",
        description: "ترکیبی از خطوط نرم و تضادهای رنگی."
    },
    {
        id: "3",
        title: "موج خیال",
        image: "/images/3.jpg",
        price: 980000,
        size: "40x60 cm"
    },
    {
        id: "4",
        title: "موج خیال",
        image: "/images/4.jpg",
        price: 980000,
        size: "40x60 cm"
    },
    {
        id: "5",
        title: "موج خیال",
        image: "/images/5.jpg",
        price: 980000,
        size: "40x60 cm"
    },
    {
        id: "6",
        title: "موج خیال",
        image: "/images/6.jpg",
        price: 980000,
        size: "40x60 cm"
    },
    {
        id: "7",
        title: "موج خیال",
        image: "/images/7.jpg",
        price: 980000,
        size: "40x60 cm"
    },
    {
        id: "8",
        title: "موج خیال",
        image: "/images/8.jpg",
        price: 980000,
        size: "40x60 cm"
    },
    {
        id: "9",
        title: " شولستانی",
        image: "/images/9.png",
        price: 123000,
        size: "50x70",
        description: "مدرن پاگ آرت"
    },
    {
        id: "10",
        title: " شولستانی",
        image: "/images/10.png",
        price: 123000,
        size: "50x70",
        description: "مدرن پاگ آرت"
    },
];