"use client";

import { BooksContext } from "@/context/BooksContext";
import { Ibook } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: Ibook }) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);
  console.log(readBooks);

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
        className=" cursor-pointer flex-1 rounded-lg border border-[#adafad] px-5 py-3 font-semibold text-black"
      >
        Read
      </button>
    </div>
  );
};

export default ReadButton;
