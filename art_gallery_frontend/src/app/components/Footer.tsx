'use client';

export default function Footer() {
    return (
        <footer className="w-full bg-zinc-950 text-zinc-300 mt-12">
            <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">

                {/* درباره ما */}
                <div>
                    <h3 className="text-white font-semibold mb-2">درباره گالری</h3>
                    <p className="leading-relaxed">
                        این گالری خانه‌ی آثار هنری رنگی و شخصی منه. هر قاب، یه تکه از دنیای خیال و درونمه. ممنون که نگاه می‌کنی 🎨🖤
                    </p>
                </div>

                {/* لینک‌های سریع */}
                <div>
                    <h3 className="text-white font-semibold mb-2">لینک‌های سریع</h3>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:text-white transition">خانه</a></li>
                        <li><a href="#" className="hover:text-white transition">آثار</a></li>
                        <li><a href="#" className="hover:text-white transition">سبد خرید</a></li>
                        <li><a href="#" className="hover:text-white transition">تماس با من</a></li>
                    </ul>
                </div>

                {/* شبکه‌های اجتماعی */}
                <div>
                    <h3 className="text-white font-semibold mb-2">شبکه‌های اجتماعی</h3>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:text-white transition">اینستاگرام</a></li>
                        <li><a href="#" className="hover:text-white transition">تلگرام</a></li>
                        <li><a href="#" className="hover:text-white transition">ایمیل</a></li>
                    </ul>
                </div>

            </div>

            <div className="text-center text-xs text-zinc-500 py-4 border-t border-zinc-800">
                © {new Date().getFullYear()} همه حقوق متعلق به مهرنوش شولستانی است 💫
            </div>
        </footer>
    );
}
