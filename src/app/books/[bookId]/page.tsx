import ReadButton from "@/components/book-details-button/ReadButton";
import WishlistButton from "@/components/book-details-button/WishlistButton";
import { Ibook } from "@/types/books.type";
import Image from "next/image";

interface BookDetailsParamsProps {
  params: Promise<{ bookId: string }>;
}

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const BookDetails = async ({ params }: BookDetailsParamsProps) => {
  const { bookId } = await params;
  const booksData = await getBooks();
  const book = booksData.find(
    (book: Ibook) => String(book.bookId) === String(bookId),
  ) as Ibook;
  console.log(book);
  return (
    <div className="container mx-auto px-4 grid max-w-4xl grid-cols-1 gap-8 rounded-2xl border border-[#e2e5df] bg-white p-6 my-20 md:grid-cols-2 md:p-8">
      {/* Book Image */}
      <div className="flex items-center justify-center rounded-xl bg-[#f5f7f3] p-6">
        <Image
          src={book.image}
          width={200}
          height={400}
          alt={book.bookName}
          className="h-100 w-75 rounded-lg object-cover shadow-lg"
        />
      </div>

      {/* Book Details */}
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#131313]">{book.bookName}</h1>

          <p className="mt-2 text-lg text-[#555]">
            By <span className="font-medium">{book.author}</span>
          </p>

          <div className="my-3 py-2 border-b border-t border-[#e5e7e3]">
            <span className="  py-1.5 text-sm font-semibold text-[#555] ">
              {book.category}
            </span>
          </div>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="font-bold">Tags </span>
            {book.tags.map((tag) => (
              <span
                key={tag}
                className=" bg-[#f4fbf2] rounded-full  px-3 py-1 text-[12px] bg text-[#23BE0A]"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Book Information */}
          <div className="mt-6 space-y-3 border-y border-[#e5e7e3] py-5 text-sm">
            <p className="flex justify-between">
              <span className="text-[#777]">Number of Pages :</span>
              <span className="font-semibold text-[#222]">
                {book.totalPages}
              </span>
            </p>

            <p className="flex justify-between">
              <span className="text-[#777]">Publisher :</span>
              <span className="font-semibold text-[#222]">
                {book.publisher}
              </span>
            </p>

            <p className="flex justify-between">
              <span className="text-[#777]">Year of Publishing :</span>
              <span className="font-semibold text-[#222]">
                {book.yearOfPublishing}
              </span>
            </p>

            <p className="flex justify-between">
              <span className="text-[#777]">Rating :</span>
              <span className="font-semibold text-[#222]">{book.rating}</span>
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3 ">
          <ReadButton book={book}></ReadButton>

          <WishlistButton book={book}></WishlistButton>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
