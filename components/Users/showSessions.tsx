"use client";

import { useState } from "react";
import Button from "../ui/Button";
import dayjs from "dayjs";

export default function ShowSessions({ sessions }: { sessions: any }) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <Button className="px-10" onClick={() => setShow(!show)}>
        {show ? "Hide sessions" : "Show sessions"}
      </Button>
      {show &&
        sessions.map((session: any) => {
          return (
            <div className="text-[16px]">
              <span className="text-gray-400 font-[300]"> IP: </span>
              {session.ipAddress}
              <span className="text-gray-400 font-[300]"> TIME: </span>
              {dayjs(session.createdAt).format("hh:mm:ss - DD/MM/YYYY")}
            </div>
          );
        })}
    </>
  );
}
