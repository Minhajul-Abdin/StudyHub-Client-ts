"use client";

import { redirect } from "next/navigation";
import { AlertDialog, Button } from "@heroui/react";

type Room = {
  _id: string;
  room_name: string;
};

type DeleteAlertProps = {
  room: Room;
};

export default function DeleteAlert({ room }: DeleteAlertProps) {
  const { _id, room_name } = room;

  const handleDelete = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/rooms/${_id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }
    );

    const data = await res.json();

    redirect("/rooms");
  };

  return (
    <AlertDialog>
      <Button className={"rounded-xl"} variant="danger">
        Delete
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />

              <AlertDialog.Heading>
                Delete Room permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                This will permanently delete{" "}
                <strong>{room_name}</strong> and all of its data. This action
                cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button
                className={"rounded-xl"}
                slot="close"
                variant="tertiary"
              >
                Cancel
              </Button>

              <Button
                onClick={handleDelete}
                className={"rounded-xl"}
                slot="close"
                variant="danger"
              >
                Delete Room
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}

