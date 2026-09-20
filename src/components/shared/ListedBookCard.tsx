import { Ibook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";

const ListedBookCard = ({ book }: { book: Ibook }) => {
  return (
    <div className="cursor-pointer mb-5 group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:gap-6">
      {/* Image */}
      <div className="relative mx-auto h-72 w-48 shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:mx-0 sm:h-60 sm:w-40">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 192px, 176px"
        />
      </div>

      {/* Book Information */}
      <div className="flex flex-1 flex-col pt-5 sm:pt-1">
        {/* Book Name & Author */}
        <div>
          <h2 className="text-2xl font-bold text-[#131313]">{book.bookName}</h2>

          <p className="mt-1 text-sm text-gray-500">
            By <span className="font-medium text-gray-700">{book.author}</span>
          </p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#e8f7fa] px-3 py-1 text-xs font-semibold text-[#50B1C9]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Book Details */}
        <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-800">Published:</span>{" "}
            {book.yearOfPublishing}
          </p>

          <p className="text-gray-600">
            <span className="font-semibold text-gray-800">Publisher:</span>{" "}
            {book.publisher}
          </p>

          <p className="text-gray-600">
            <span className="font-semibold text-gray-800">Pages:</span>{" "}
            {book.totalPages}
          </p>

          <p className="text-gray-600">
            <span className="font-semibold text-gray-800">Category:</span>{" "}
            {book.category}
          </p>
        </div>

        {/* Rating & View Details */}
        <div className="mt-5 flex flex-col gap-4 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">★</span>

            <span className="font-semibold text-gray-800">{book.rating}</span>

            <span className="text-sm text-gray-400">/ 5.0</span>
          </div>

          <Link
            href={`/books/${book.bookId}`}
            className="rounded-lg bg-[#50B1C9] px-5 py-2.5 text-center text-sm font-semibold text-white transition-all duration-200 hover:bg-[#3f9db5]"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;
