"use client";

import React, { useState } from "react";
import { TopUsers } from "../Users/types";
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
// import { updateTopUser } from "@/lib/requests";
import { ClipLoader } from "react-spinners";
import { updateUtil } from "@/lib/requests";

export default function Util({ util }: { util: any }) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [value, setValue] = useState<number>(util.isPercent ? (util.entityValue * 100).toFixed(2) : util.entityValue);
  const [updatedValue, setUpdatedValue] = useState(value);
  const [loading, setLoading] = useState<boolean>(false);

  const handleEdit = () => setIsEditing(true);
  const handleCloseEdit = (e: { stopPropagation: () => void }) => {
    setUpdatedValue(value);
    e.stopPropagation();
    setIsEditing(false);
  };

  const handleSubmit = async (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setLoading(true);
    const response = await updateUtil({
      entityKey: util.entityKey,
      entityValue: util.isPercent ? updatedValue/100 : updatedValue,
    });
    setLoading(false);
    if (response) {
      setValue(updatedValue);
      setIsEditing(false);
    } else {
      alert("Someting went wrong, try again");
      handleCloseEdit(e);
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUpdatedValue(parseFloat(e.target.value));
  
  return (
    <div
      onClick={handleEdit}
      className="w-full border-2 border-gray-600 p-2 rounded-xl grid grid-cols-4 items-center gap-2 px-6 max-sm:px-2 text-center max-sm:text-[14px] cursor-pointer hover:bg-gray-400/40"
    >
      <div className="w-full max-sm:text-[10px] col-span-2">{util.entityKey}</div>
      <div>
        {isEditing ? (
          <input
            type="number"
            value={updatedValue}
            onChange={handleAmountChange}
            step="0.01"
            autoFocus
          />
        ) : value + ` ${util.isPercent ? "%" : ""}`}
      </div>
      {isEditing ? (
        !loading ? (
          <div className="flex items-center gap-4 justify-center text-[160%] max-sm:gap-2">
            <div onClick={handleSubmit}>
              <FaCheckCircle className="text-green-500" />
            </div>
            <div onClick={handleCloseEdit}>
              <IoMdCloseCircle className="text-[120%] text-red-400" />
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ClipLoader color="#8b5cf6" />
          </div>
        )
      ) : (
        <div className="text-[150%] flex items-center justify-center max-sm:text-[120%]">
          <FaEdit />
        </div>
      )}
    </div>
  );
}
