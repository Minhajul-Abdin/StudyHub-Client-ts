import Image from "next/image";
import { Chip } from "@heroui/react";
import CancelBookButton from "./CancelBookButton";

type Book = {
  room_image_url: string;
  room_name: string;
  bookAt: string | Date;
};

type BookedCardProps = {
  book: Book;
};

const BookedCard = ({ book }: BookedCardProps) => {
  return (
    <div className="flex gap-4 p-4 bg-white border rounded-xl">
      <Image
        src={book.room_image_url}
        alt="course"
        width={120}
        height={90}
        className="rounded-lg"
      />

      <div className="flex flex-col grow justify-between">
        <div>
          <h3 className="font-bold">{book.room_name}</h3>

          <p className="text-sm text-slate-500">
            Enrolled On: {new Date(book.bookAt).toDateString()}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <Chip color="success" size="sm">
            Active
          </Chip>

          <CancelBookButton />
        </div>
      </div>
    </div>
  );
};

export default BookedCard;

