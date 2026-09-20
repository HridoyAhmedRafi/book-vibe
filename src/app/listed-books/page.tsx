"use client";
import BookCard from "@/components/shared/BookCard";
import ListedBookCard from "@/components/shared/ListedBookCard";
import { BooksContext } from "@/context/BooksContext";
import { Ibook } from "@/types/books.type";
import { useContext, useState } from "react";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext);
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  const sortBooks = (books: Ibook[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return sortedBooks;
  };

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlistBooks = sortBooks(wishlist);

  return (
    <div className="container mx-auto px-4 ">
      <div className="bg-[#f3f3f3] py-8 my-5 rounded-2xl">
        <h1 className="text-center text-3xl text-[#131313] font-bold">Books</h1>
      </div>

      <div className="text-center ">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "rating" | "pages" | "year")
          }
          defaultValue="Sort by"
          className="bg-[#23be0a] text-white font-semibold w-40 select select-success"
        >
          <option disabled={true}>Sort by</option>
          <option value={"rating"}>Rating</option>
          <option value={"pages"}>Number of Page</option>
          <option value={"year"}>Published Year</option>
        </select>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read (${readBooks.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 ">
          {sortedReadBooks.length > 0 ? (
            sortedReadBooks.map((book: Ibook) => (
              <ListedBookCard book={book} key={book.bookId}></ListedBookCard>
            ))
          ) : (
            <p className="text-center text-lg text-[#716e6e]">
              No Read books found
            </p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist (${wishlist.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedWishlistBooks.length > 0 ? (
            sortedWishlistBooks.map((book: Ibook) => (
              <ListedBookCard book={book} key={book.bookId}></ListedBookCard>
            ))
          ) : (
            <p className="text-center text-lg text-[#716e6e] ">
              No Wishlist books found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
