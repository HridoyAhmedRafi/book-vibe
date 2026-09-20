"use client";
import { BooksContext } from "@/context/BooksContext";
import { useContext } from "react";

const ListedBooks = () => {
  const { readBooks } = useContext(BooksContext);
  console.log(readBooks);
  return <div>Listed Book : {readBooks.length}</div>;
};

export default ListedBooks;
