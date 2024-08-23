"use client"

import { usePathname } from "next/navigation"

export default function TitleForNav(){
    const pathname = usePathname();
   
    const title = pathname.startsWith('/menu/users') ? 'USERS' : pathname.startsWith('/menu/deposits') ? 'DEPOSITS' : pathname.startsWith('/menu/random') ? 'RANDOM' : pathname.startsWith('/menu/lottery') ? "LOTTERIES" : "WITHDRAW"

    return <div>{title}</div>
}