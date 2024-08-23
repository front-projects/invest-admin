"use client";

import { useState } from "react";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import { createTransaction } from "@/lib/requests";

export default function TopUpBalance({ userId }: { userId: any }) {
  const [value, setValue] = useState(0);
  const [modal, setModal] = useState(false);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(parseFloat(e.target.value));

  const submitHandler = async (event: { stopPropagation: () => void }) => {
    const response = await createTransaction(
      {
        transactionAmount: value > 0 ? value : 1,
        incomeCausedByUserTgName: 1,
      },
      userId
    );

    if (response) {
      window.location.href = `/menu/users/${userId}`;
    } else {
      alert("Error, try again");
    }
    event.stopPropagation();
  };


  return (
    <>
      <input
        placeholder="Enter an amount"
        value={value}
        onChange={handleAmountChange}
        type="number"
      />
      <Button onClick={() => setModal(true)}>Top up balance</Button>
      <Modal show={modal} onClose={() => setModal(false)}>
        <div className="text-center flex flex-col gap-4">
          <p>Do you want to create transaction for this user? </p>
          <div>{value.toFixed(2)} $</div>

          <div className="flex w-full items-center gap-2">
            <Button className="w-1/2" onClick={submitHandler}>
              Ok
            </Button>
            <div
              onClick={() => setModal(false)}
              className="rounded-[8px] p-2 w-1/2 text-center border-2 
              cursor-pointer hover:bg-gray-400/20 shadow-xl "
            >
              Cancel
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
