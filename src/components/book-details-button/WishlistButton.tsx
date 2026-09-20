"use client";
import { BooksContext } from "@/context/BooksContext";
import { Ibook } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const WishlistButton = ({ book }: { book: Ibook }) => {
  const { wishlist, setWishlist } = useContext(BooksContext);

  const alreadyWishlisted = wishlist.some(
    (bookItem) => bookItem.bookId === book.bookId,
  );

  const handleWishlistButton = () => {
    setWishlist([...wishlist, book]);
    toast.success(`You have added  ${book.bookName} to Wishlist`, {
      position: "bottom-right",
    });
  };

  return (
    <div>
      <button
        onClick={() => handleWishlistButton()}
        className="cursor-pointer flex-1 rounded-lg border border-transparent bg-[#50B1C9] px-5 py-3 font-semibold text-white hover:border-[#50B1C9] hover:bg-transparent hover:text-[#50B1C9]"
        disabled={alreadyWishlisted}
      >
        {alreadyWishlisted === true ? "✓ Already Wishlisted" : "Wishlist"}
      </button>
    </div>
  );
};

export default WishlistButton;
