const Footer = () => {
  return (
    <footer className="mt-16 border-t border-[#e5e7e3] bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          {/* Logo */}
          <div>
            <h2 className="text-xl font-bold text-[#161a15]">
              Book <span className="text-[#23BE0A]">Vibe</span>
            </h2>
            <p className="mt-1 text-sm text-[#6b7069]">
              Discover your next favorite book.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-[#555a54]">
            <a href="#" className="transition-colors hover:text-[#23BE0A]">
              Home
            </a>
            <a href="#" className="transition-colors hover:text-[#23BE0A]">
              Listed Books
            </a>
            <a href="#" className="transition-colors hover:text-[#23BE0A]">
              Pages to Read
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#e5e7e3] py-5 text-center text-sm text-[#858982]">
          © {new Date().getFullYear()} Book Vibe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
