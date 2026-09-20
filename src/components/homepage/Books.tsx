import { Ibook } from "@/types/books.type";
import BooksCard from "../shared/BooksCard";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <div className="my-20">
      <div className="flex flex-col items-center mb-10">
        <p className="text-[#23BE0A]">OUR COLLECTION</p>
        <h1 className=" text-[#131313] text-[40px]">Explore Popular Books</h1>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {booksData.slice(0, 9).map((book: Ibook) => (
          <BooksCard book={book} key={book.bookId}></BooksCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
