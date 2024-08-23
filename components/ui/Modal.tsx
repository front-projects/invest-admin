"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Modal({
  children,
  show,
  onClose,
}: Readonly<{
  children: React.ReactNode;
  show: any;
  onClose: any;
}>) {
  const modalRef = useRef(null);
  useEffect(() => {
    if (show) {
      gsap.fromTo(modalRef.current, { y: 200 }, { y: 0, duration: .3 });
    }
  }, [show]);


  return (
    show && (
      <div
        className="w-screen h-screen fixed inset-0 bg-black/50 items-center justify-center flex z-10"
        onClick={()=> onClose()}
      >
        <div ref={modalRef} className="bg-[rgb(23,24,30)] p-6 px-14 border-2 border-violet-500 rounded-xl" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    )
  );
}
