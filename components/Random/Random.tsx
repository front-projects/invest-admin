"use client";

import { useState } from "react";
import Button from "../ui/Button";

import { randomLottery } from "@/lib/requests";
import Modal from "../ui/Modal";

export default function Random() {
  const [modal, setModal] = useState<boolean>();
  const [submited, setSubmited] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [obj, setObj] = useState({
    count: 0,
    max: 0,
    min: 0,
  });

  const openModal = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setModal(true);
  };

  const submitHandler = async () => {
    setIsLoading(true);
    const response = await randomLottery(obj);
    console.log(response)
    if (response) {
      setIsLoading(false);
      setSubmited(response);
      setObj({
        count: 0,
        max: 0,
        min: 0,
      });
    } else {
      setIsLoading(false);
      setModal(false);
      alert("Error, try again later");
    }
  };

  const handleFocus = (key: keyof typeof obj) => {
    if (obj[key] === 0) {
      setObj({ ...obj, [key]: "" });
    }
  };

  return (
    <>
      <Modal
        show={modal}
        onClose={() => {
          setSubmited(false);
          setModal(false);
        }}
      >
        {submited ? (
          <div className="flex flex-col items-center">
            <div className="flex flex-col gap-4 max-sm:gap-4 max-h-[60vh] max-w-[40vw] overflow-y-auto max-sm:max-w-[100vw]">
              {submited.map((user: any) => (
                <div>
                  {user.username} -{" "}
                  {user.income.transactionAmount.toFixed(2)} $
                </div>
              ))}
            </div>
            <Button
              className="w-1/2 mt-4"
              onClick={() => {
                setSubmited(false);
                setModal(false);
              }}
            >
              Ok
            </Button>
          </div>
        ) : (
          <div className="w-full text-center flex flex-col gap-4 max-sm:gap-2">
            <p>Do you want to make random prizes?</p>
            <p>Count - {obj.count}</p>
            <p>
              Min - {obj.min} $ Max - {obj.max} $
            </p>

            <div className="flex w-full items-center gap-2">
              <Button
                disabled={isLoading}
                className="w-1/2"
                onClick={submitHandler}
              >
                {isLoading ? "Submiting..." : "Ok"}
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
        )}
      </Modal>
      <div className="border-2 border-gray-500 rounded-xl w-1/2 max-xl:w-2/3 max-lg:w-[80%] max-sm:w-full p-4 mt-4 flex items-center justify-center max-sm:text-[12px]">
        <form className="flex flex-col gap-2 text-center" onSubmit={openModal}>
          <label>Count:</label>
          <input
            type="number"
            placeholder="Count"
            value={obj.count}
            onChange={(e) => setObj({ ...obj, count: +e.target.value })}
            onFocus={() => handleFocus("count")}
          />
          <label>Min:</label>
          <input
            type="number"
            placeholder="Min"
            value={obj.min}
            onChange={(e) => setObj({ ...obj, min: +e.target.value })}
            onFocus={() => handleFocus("min")}
          />
          <label>Max:</label>
          <input
            type="number"
            placeholder="Max"
            value={obj.max}
            className="mb-6"
            onChange={(e) => setObj({ ...obj, max: +e.target.value })}
            onFocus={() => handleFocus("max")}
          />

          <Button type="submit">Random</Button>
        </form>
      </div>
    </>
  );
}
