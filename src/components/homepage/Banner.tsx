import Image from "next/image";

import bannerImage from "@/assets/banner_book.png";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Banner = () => {
  return (
    <section className=" group relative my-5 overflow-hidden rounded-2xl border border-[#23BE0A] bg-white ]">
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#131313 1px, transparent 1px), linear-gradient(90deg, #131313 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-4 py-10 my-5 px-5">
        <div className="mx-auto">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#23BE0A]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5c625b]">
              Curated Collection
            </span>
          </div>

          <h1
            className={`${playfair.className} text-[#111410] text-[40px] md:text-[56px] mb-10 font-medium leading-[1.05] tracking-[-2px]`}
          >
            Books to freshen up
            <br />
            <span className="relative">
              your bookshelf
              <span className="absolute -bottom-2 left-0 h-0.75 w-20 rounded-full bg-[#23BE0A]" />
            </span>
          </h1>

          <button className="group/btn relative overflow-hidden rounded-full border border-[#161a15] bg-[#161a15] px-5 py-3 text-[13px] md:text-sm font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.16)] transition-all duration-300 hover:border-[#23BE0A]">
            <span className="cursor-pointer relative z-10 flex items-center gap-3">
              View The List
              <span className="flex h-5 w-5 md:h-7 md:w-7 items-center justify-center rounded-full bg-[#23BE0A] text-[#111410] transition-transform duration-300 group-hover/btn:translate-x-1">
                →
              </span>
            </span>

            <span className="absolute inset-0 -translate-x-full bg-[#23BE0A] transition-transform duration-300 group-hover/btn:translate-x-0" />
          </button>
        </div>

        <div className="mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#23BE0A]/15 blur-3xl" />

            <div className="absolute left-1/2 top-1/2 h-80 w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#23BE0A]/20" />

            <div className="relative rounded-4xl border border-white/70 bg-white/30 p-5 shadow-[0_25px_45px_rgba(30,35,30,0.12)] backdrop-blur-sm">
              <Image
                src={bannerImage}
                alt="Banner Image"
                className="cursor-pointer relative drop-shadow-[0_25px_20px_rgba(0,0,0,0.18)] transition-all duration-500 ease-out hover:-translate-y-3 hover:rotate-2 hover:scale-105 hover:drop-shadow-[0_35px_30px_rgba(0,0,0,0.22)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
