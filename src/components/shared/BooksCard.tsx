import { Ibook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";

interface bookProps {
  book: Ibook;
}

const BookCard = ({ book }: bookProps) => {
  return (
    <div className="cursor-pointer group overflow-hidden rounded-2xl border border-[#e2e5df] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Book Image */}
      <div className="relative m-3 overflow-hidden rounded-xl bg-[#f3f5f0]">
        <Image
          src={book.image}
          alt={book.bookName}
          width={400}
          height={500}
          className="h-60 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#23BE0A] shadow-sm backdrop-blur-sm">
          {book.category}
        </span>

        {/* Rating */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-[#161a15]/90 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm">
          <span className="text-[#23BE0A]">★</span>
          {book.rating}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-4">
        <h2 className="line-clamp-2 text-lg font-semibold leading-snug text-[#161a15] transition-colors duration-300 group-hover:text-[#23BE0A]">
          {book.bookName}
        </h2>

        <p className="mt-1.5 text-sm text-[#6b7069]">
          By <span className="font-medium text-[#424642]">{book.author}</span>
        </p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#f1f8ee] px-3 py-1 text-xs font-medium text-[#23BE0A]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Book Info */}
        <div className="mt-4 grid grid-cols-2 gap-2 border-y border-[#eceeea] py-3">
          <div>
            <p className="text-xs text-[#858982]">Pages</p>
            <p className="mt-1 text-sm font-semibold text-[#252925]">
              {book.totalPages}
            </p>
          </div>

          <div>
            <p className="text-xs text-[#858982]">Published</p>
            <p className="mt-1 text-sm font-semibold text-[#252925]">
              {book.yearOfPublishing}
            </p>
          </div>

          <div>
            <p className="text-xs text-[#858982]">Publisher</p>
            <p className="mt-1 text-sm font-semibold text-[#252925]">
              {book.publisher}
            </p>
          </div>

          <div>
            <p className="text-xs text-[#858982]">Rating</p>
            <p className="mt-1 text-sm font-semibold text-[#252925]">
              {book.rating} / 5
            </p>
          </div>
        </div>

        {/* Button */}
        <Link href={`/books/${book.bookId}`}>
          <button className="cursor-pointer mt-4 w-full rounded-lg border border-[#23BE0A] px-4 py-2 text-sm font-semibold text-[#23BE0A] transition-all duration-300 hover:bg-[#23BE0A] hover:text-white">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
