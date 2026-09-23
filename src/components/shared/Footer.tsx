const Footer = () => {
  return (
    <footer className="mt-16 border-t border-[#e5e7e3] bg-white">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-[#161a15]">
              Book <span className="text-[#23BE0A]">Vibe</span>
            </h2>

            <p className="mt-1 text-sm text-[#6b7069]">
              Discover your next favorite book.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-[#555a54]">
            <a
              href="#"
              className="transition-colors hover:text-[#23BE0A]"
            >
              Home
            </a>

            <a
              href="#"
              className="transition-colors hover:text-[#23BE0A]"
            >
              Listed Books
            </a>

            <a
              href="#"
              className="transition-colors hover:text-[#23BE0A]"
            >
              Pages to Read
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-[#e5e7e3] py-5 text-center text-[12px] text-[#858982] md:flex-row">
          <p>
            © {new Date().getFullYear()} Book Vibe. All rights reserved.
          </p>

          <span className="text-[10px] font-bold">
            DEV BY <span className="text-[#23BE0A]">HRIDOY</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;