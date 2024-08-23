"use client"

import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import { createTransaction } from "@/lib/requests";
import { getLottery } from "@/lib/requests";
import { Lottery } from "./types";
import Select from 'react-select'

import { customStyles } from "../ui/CustomSelect";

export default function TopUpBalance({ userId }: { userId: any }) {
    const [value, setValue] = useState(0);
    const [modal, setModal] = useState(false);
    const [lottery, setLottery] = useState<Lottery[] | undefined>();
    const [options,setOptions] = useState<any[]>();
    const [level, setLevel] = useState<string>('LEVEL_1')


    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(parseFloat(e.target.value));

    useEffect(() => {
        const fetchData = async () => {
            const response = await getLottery();
            if (response) {
                setLottery(response);
            }
        }
        fetchData();
    }, [])

    const submitHandler = async (event: { stopPropagation: () => void; }) => {
        const response = await createTransaction({
            transactionAmount: value > 0 ? value : 1,
            purchasedModel: level ? level : 'LEVEL_1',
            incomeCausedByUserTgName: 1,
        }, userId);

        if (response) {
            window.location.href = `/menu/users/${userId}`
        } else {
            alert('Error, try again')
        }
        event.stopPropagation();
    }


    useEffect(() => {
        const optionsFetched = lottery?.map(el => {
            return { value: el.investModelLevel, label: el.naming }
        })
        setOptions(optionsFetched);
    }, [lottery])

    const handleChange = (option:any) => {
        setLevel(option.value);
    }


    return <>
        <input placeholder="Enter an amount" value={value} onChange={handleAmountChange} type="number" />
        <Button onClick={() => setModal(true)}>Top up balance</Button>
        <Modal show={modal} onClose={() => setModal(false)}><div className="text-center flex flex-col gap-4">
            <p>Do you want to create transaction for this user? </p>
            <div>{value.toFixed(2)} $</div>
            <Select options={options} styles={customStyles} placeholder="Select level" onChange={handleChange} id='select-for-topUp'/>

            <div className="flex w-full items-center gap-2">

                <Button className="w-1/2" onClick={submitHandler}>
                    Ok
                </Button>
                <div
                    onClick={()=> setModal(false)}
                    className="rounded-[8px] p-2 w-1/2 text-center border-2 
              cursor-pointer hover:bg-gray-400/20 shadow-xl "
                >
                    Cancel
                </div>
            </div>
        </div></Modal >
    </>
}