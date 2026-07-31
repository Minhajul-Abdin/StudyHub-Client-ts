"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { deleteSeletedRoom } from "@/lib/rooms/actions";

type CancelBookButtonProps = {
  bookId: string;
};

const CancelBookButton = ({ bookId }: CancelBookButtonProps) => {
  const router = useRouter();

  const handleDeleteBooking = async () => {
    const data = await deleteSeletedRoom(bookId);

    router.refresh();

    if (data?.bookCount) {
    }
  };

  return (
    <AlertDialog>
      <Button size="sm">
        Cancel
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />

              <AlertDialog.Heading>
                Confirm Cancellation
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p className="text-slate-600">
                Are you sure you want to cancel this Booking? This action
                cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Keep Booking
              </Button>

              <Button
                onPress={handleDeleteBooking}
                slot="close"
                
                className="font-bold"
              >
                Yes, Cancel
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default CancelBookButton;

