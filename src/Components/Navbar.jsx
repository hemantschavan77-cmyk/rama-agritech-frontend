import { useState, useEffect } from "react";

const SHOP_PHONE = "+919579871489"; // Shop number

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "मुख्यपृष्ठ", href: "/" },
    { name: "पिके", href: "/crops" },
    { name: "आमच्याबद्दल", href: "/about" },
    { name: "संपर्क", href: "/contact" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-emerald-900/10 bg-white/85 shadow-sm backdrop-blur-md"
          : "border-b border-slate-100 bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-3 transition-transform duration-200 active:scale-95"
          aria-label="Rama Agritech - मुख्यपृष्ठ"
        >
          <img
            src="/images/rama-agri-logo.jpeg"
            alt="Rama Agritech"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />

          <div className="flex flex-col">
            <span className="font-serif text-lg leading-tight font-black tracking-tight text-emerald-950">
              रामा ॲग्रीटेक
            </span>

            <span className="text-[10px] font-semibold tracking-widest text-emerald-600 uppercase">
              Agri Solutions
            </span>
          </div>
        </a>

        {/* Desktop */}
        <nav
          aria-label="मुख्य नेव्हिगेशन"
          className="hidden items-center gap-1 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-emerald-50/70 hover:text-emerald-700"
            >
              {link.name}

              {/* Animated underline */}
              <span
                aria-hidden="true"
                className="absolute right-4 bottom-1 left-4 h-0.5 scale-x-0 rounded-full bg-emerald-600 transition-transform duration-200 ease-out group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        {/* Contact CTA and Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Desktop Contact Button */}
          <a
            href={`tel:${SHOP_PHONE}`}
            className="hidden items-center gap-2 rounded-full bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm shadow-emerald-700/20 transition-all duration-200 hover:bg-emerald-700 hover:shadow-md hover:shadow-emerald-700/30 active:scale-95 lg:inline-flex"
          >
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>

            <span>संपर्क साधा</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "मेनू बंद करा" : "मेनू उघडा"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white/60 text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700 active:scale-95 md:hidden"
          >
            {isMenuOpen ? (
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div
        id="mobile-navigation"
        aria-label="मोबाइल नेव्हिगेशन"
        aria-hidden={!isMenuOpen}
        className={`grid transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen
            ? "grid-rows-[1fr] border-t border-slate-100 opacity-100 shadow-xl"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden bg-white/95 backdrop-blur-md">
          <nav className="space-y-1.5 px-4 pt-3 pb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={closeMenu}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-slate-800 transition-colors hover:bg-emerald-50 hover:text-emerald-700 active:bg-emerald-100"
              >
                <span>{link.name}</span>

                <span
                  aria-hidden="true"
                  className="font-bold text-emerald-500"
                >
                  ›
                </span>
              </a>
            ))}

            <div className="pt-3">
              <a
                href={`tel:${SHOP_PHONE}`}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={closeMenu}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-700/20 transition-colors hover:bg-emerald-700 active:bg-emerald-800"
              >
                <span aria-hidden="true">📞</span>
                <span>त्वरित संपर्क</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;