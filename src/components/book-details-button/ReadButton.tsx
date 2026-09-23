"use client";

import { BooksContext } from "@/context/BooksContext";
import { Ibook } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: Ibook }) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);

  const alreadyRead = readBooks.some(
    (bookItem) => bookItem.bookId === book.bookId,
  );

  const handleReadButton = () => {
    setReadBooks([...readBooks, book]);
    toast.success(`You have read ${book.bookName}`, {
      position: "bottom-right",
    });
  };

  return (
<div>
  <button
    onClick={() => handleReadButton()}
    className="cursor-pointer flex-1 rounded-lg border border-[#adafad] px-3 py-2 text-sm font-semibold text-black hover:border-[#23BE0A] hover:text-[#23BE0A] md:px-5 md:py-3 md:text-base"
    disabled={alreadyRead}
  >
    {alreadyRead === true ? "✓ Already Read" : "Read"}
  </button>
</div>
  );
};

export default ReadButton;
