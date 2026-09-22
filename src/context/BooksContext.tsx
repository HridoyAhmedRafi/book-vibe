"use client";
import { Ibook } from "@/types/books.type";
import React, { createContext, ReactNode, useState } from "react";

interface IbookContext {
  readBooks: Ibook[];
  setReadBooks: React.Dispatch<React.SetStateAction<Ibook[]>>;
  wishlist: Ibook[];
  setWishlist: React.Dispatch<React.SetStateAction<Ibook[]>>;
}
export const BooksContext = createContext<IbookContext>({
  readBooks: [],
  setReadBooks: () => {},
  wishlist: [],
  setWishlist: () => {},
});

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<Ibook[]>([]);
  const [wishlist, setWishlist] = useState<Ibook[]>([]);
  const sharedData = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };

  return (
    <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
